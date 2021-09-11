<template>
  <header class="header">
    <router-link to="/synergy">
      <img
        class="header__logo"
        :src="this.images.logoSynergy"
        alt="Logo Synergy"
    /></router-link>

    <div v-if="isUserAuthenticate" class="header__nav">
      <router-link to="/synergy/techniques" class="nav__item"
        >Tecnicas</router-link
      >
      <router-link to="/synergy/resources" class="nav__item"
        >Recursos</router-link
      >
      <router-link :to="'/synergy/profile/' + currentUser._id" class="nav__item"
        >Perfil</router-link
      >

      <button @click="handleLogout()" class="button">Logout</button>
    </div>
    <div v-else class="header__nav">
      <router-link to="/synergy/login" class="nav__item">Tecnicas</router-link>
      <router-link to="/synergy/login" class="nav__item">Recursos</router-link>
      <router-link to="/synergy/login" class="nav__item">Perfil</router-link>

      <router-link to="/synergy/login" class="nav__item">Ingresar</router-link>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import imagesURLs from "../assets/constants";

export default {
  name: "Header",

  computed: {
    ...mapState(["isUserAuthenticate", "currentUser"]),
  },
  methods: {
    ...mapActions(["getUserFromLocalStorage", "deleteDataFromLocalStorage"]),

    handleLogout() {
      this.deleteDataFromLocalStorage();
      this.$router.push("/synergy/");
    },
  },
  data() {
    return {
      images: imagesURLs,
    };
  },
  mounted() {
    this.getUserFromLocalStorage();
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