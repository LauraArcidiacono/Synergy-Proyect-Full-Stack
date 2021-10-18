<template>
  <form
    action
    class="login"
    @submit.prevent="handleSubmit()"
    data-test="handleSubmit__login"
  >
    <h3>Login</h3>
    <div class="login__userData">
      <label for="email"
        >Ingresa tu email
        <br />
        <input
          name="email"
          type="email"
          placeholder="jane_doe@gmail.com"
          v-model.trim="userData.email"
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
          v-model.trim="userData.password"
          required
        />
      </label>
      <span v-if="error" class="error"
        >Has introducido mal el email o la contraseña.</span
      >
      <button class="button">Ingresar</button>
      <h4>¿Aún no te has registrado en Synergy?</h4>
      <router-link to="/synergy/register" class="routerButton">
        Regístrate</router-link
      >
    </div>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Login",

  methods: {
    ...mapMutations(["loginUser"]),

    ...mapActions(["login"]),

    handleSubmit() {
      this.login(this.userData);
      this.$router.push("/synergy/dashboard");
    },
  },

  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
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
    font-size: 1rem;
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
.routerButton {
  @include button;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: $regLogBlue;
  }
}

@media (max-width: 800px) {
  .login__userData {
    margin-bottom: 3vh;
    margin-top: 2vh;
    width: 70vw;
  }
  .login {
    h4 {
      font-size: 0.8rem;
    }
  }
}
</style>