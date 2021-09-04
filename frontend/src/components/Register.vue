<template>
  <section class="register">
    <h3>Regístrate</h3>
    <div class="register__userData">
      <label for="name"
        >Nombre y apellido
        <br />
        <input name="name" type="name" placeholder="Jane Doe" v-model="name" />
      </label>
      <label for="profession"
        >Profesión
        <br />
        <input
          name="profession"
          type="profession"
          placeholder="Educadora Social"
          v-model="profession"
        />
      </label>
      <label for="city"
        >Ciudad
        <br />
        <input name="city" type="city" placeholder="Barcelona" v-model="city" />
      </label>
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
        >Ingresa una contraseña
        <br />
        <input
          name="password"
          type="password"
          placeholder="****************"
          v-model="password"
        />
      </label>
      <button class="button">Ingresa</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.register {
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
    font-size: 1.5vw;
  }
}
.register__userData {
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