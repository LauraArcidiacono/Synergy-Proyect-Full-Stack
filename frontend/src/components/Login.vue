<template>
  <form action class="login" @submit.prevent="login">
    <h3>Login</h3>
    <div class="login__userData">
      <label for="email"
        >Ingresa tu email
        <br />
        <input
          name="email"
          type="email"
          placeholder="jane_doe@gmail.com"
          v-model.trim="email"
          required
        />
      </label>
      <label for="password"
        >Ingresa tu contraseña
        <br />
        <input
          name="password"
          type="password"
          placeholder="****************"
          v-model.trim="password"
          required
        />
      </label>
      <span v-if="error" class="error"
        >Has introducido mal el email o la contraseña.</span
      >
      <button class="button">Ingresar</button>
      <h4>¿Aún no te has registrado en Synergy</h4>
      <router-link to="/synergy/register">
        <button type="submit" class="button">Regístrate</button></router-link
      >
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import auth from "../logic/auth";

export default {
  name: "Login",

  methods: {
    ...mapMutations(["loginUser"]),

    async login() {
      try {
        const loggedUser = await auth.login(this.email, this.password);
        console.log("este es el loggedUser", loggedUser);
        this.loginUser(loggedUser);
        this.$router.push("/synergy/dashboard");
      } catch (error) {
        this.error = true;
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vw;
  & h3 {
    color: $regLogBlue;
    text-align: center;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
  & label {
    color: white;
    width: 90%;
    text-align: center;
    margin: 2vw;
  }
  & input {
    background-color: $aquaHeader;
    border: transparent;
    border-radius: 2vw;
    margin: 1vw;
    padding: 1vw;
    width: 90%;
  }
  & h4 {
    margin-top: 2vw;
  }
}
.login__userData {
  background-color: $regLogBlue;
  border-radius: 1.5vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
}
.button {
  @include button;
}
</style>