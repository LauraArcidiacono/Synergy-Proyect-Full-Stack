<template>
  <header class="header">
    <img
      class="header__logo"
      src="../images/DinamicasGrupales.png"
      alt="Logo Synergy"
    />
    <button @click="changeIsAuthenticate" class="button">Loguearse</button>
    <div v-if="isAuthenticate" class="header__nav">
      <router-link to="/synergy/techniques" class="nav__item"
        >Techniques</router-link
      >
      <router-link to="/synergy/profile" class="nav__item">Profile</router-link>
      <router-link to="/synergy/resources" class="nav__item"
        >Resources</router-link
      >
      <router-link to="/synergy/loginRegister" class="nav__item"
        >Logout</router-link
      >
    </div>
    <div v-else class="header__nav">
      <router-link to="/synergy/notFound" class="nav__item"
        >Techniques</router-link
      >

      <router-link to="/synergy/notFound" class="nav__item"
        >Profile</router-link
      >

      <router-link to="/synergy/notFound" class="nav__item"
        >Resources</router-link
      >

      <router-link to="/synergy" class="nav__item">Ingresar</router-link>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapState(["isAuthenticate"]),
  },
  methods: {
    ...mapMutations(["changeIsAuthenticate"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

header {
  display: flex;
  height: 30vh;
  width: 100%;
  background-color: $aquaHeader;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  height: 90%;
  margin: 1vh;
}
.header__nav {
  margin: 3vh;
  align-items: center;
  justify-items: flex-end;
}
.nav__item {
  margin: 3vw;
  text-decoration: none;
  color: rgb(10, 76, 99);
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
}
.button {
  @include button;
}
</style>