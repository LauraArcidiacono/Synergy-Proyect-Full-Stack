<template>
  <header class="headerContainer">
    <div class="header__logo">
      <router-link to="/synergy">
        <img
          class="logo__logo"
          :src="this.images.logoSynergy"
          alt="Logo Synergy"
      /></router-link>
      <h1 class="header__title">Synergy - Dinámicas Grupales</h1>
    </div>

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

      <button
        @click="handleLogout()"
        id="logout__button"
        class="nav__item-button"
      >
        Logout
      </button>
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

.headerContainer {
  display: flex;
  height: auto;
  width: 100%;
  background-color: $aquaHeader;
  align-items: center;
  justify-content: space-between;
}
.header__title {
  display: none;
}
.header__nav {
  width: 50%;
  margin: 3vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.header__logo {
  width: 20%;
}
.logo__logo {
  width: 100%;
  margin: 1vh;
  &:hover {
    opacity: 0.8;
  }
}
.nav__item {
  margin: 3vw;
  text-decoration: none;
  color: rgb(10, 76, 99);
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  &:hover {
    opacity: 0.8;
  }
}
.nav__item-button {
  @include button;
}

@media (max-width: 780px) {
  .headerContainer {
    flex-direction: column;
  }
  .header__nav {
    flex-direction: column;
    align-content: center;
  }
  .nav__item {
    font-size: 1rem;
  }
}
</style>