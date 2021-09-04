<template>
  <div>
    <section class="login">
      <h3>Login</h3>
      <div class="login__userData">
        <label for="email"
          >Ingresa tu email
          <br />
          <input
            name="email"
            type="email"
            placeholder="jane_doe@gmail.com"
            v-model="email"
          />
        </label>
        <label for="password"
          >Ingresa tu contraseña
          <br />
          <input
            name="password"
            type="password"
            placeholder="****************"
            v-model="password"
          />
        </label>
        <button class="button">Ingresar</button>
        <h4>¿Aún no te has registrado en Synergy</h4>
        <button class="button">Regístrate</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
}
.button {
  @include button;
}
</style>