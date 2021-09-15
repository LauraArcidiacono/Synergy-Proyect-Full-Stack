<template>
  <footer class="footerContainer">
    <div class="footer__logo">
      <router-link to="/synergy">
        <img
          class="logo__logo"
          :src="this.images.logoSynergy"
          alt="Logo Synergy"
        />
        /></router-link
      >
    </div>
    <div class="footer__central">
      <img
        class="footer__title"
        :src="this.images.nombre"
        alt="Synergy Dinámicas Grupales"
      />
      <span class="footer__span">by Laura Arcidiacono</span>
      <span class="footer__span">Todos los derechos reservados</span>
      <span class="footer__span">© 2000-2021</span>
    </div>
    <div class="footer__logos">
      <img class="logos__item" :src="this.images.twiter" alt="Logo Twiter" />
      <img
        class="logos__item"
        :src="this.images.facebook"
        alt="Logo Facebook"
      />
      <img
        class="logos__item"
        :src="this.images.instagram"
        alt="Logo Instagram"
      />
    </div>
  </footer>
</template>

<script>
import imagesURLs from "../assets/constants";

export default {
  name: "Footer",
  data() {
    return {
      images: imagesURLs,
    };
  },
};
</script>

<style lang="scss" scoped>
.footerContainer {
  width: 100%;
  display: flex;
  height: auto;
  background-color: rgb(215, 234, 226);
  align-items: center;
  justify-content: space-between;
}
.footer__logo {
  width: 25%;
  display: flex;
  justify-content: center;
}
.logo__logo {
  width: 60%;
  margin: 1vh;
  &:hover {
    opacity: 0.8;
  }
}
.footer__title {
  margin-bottom: 2vh;
  width: 60%;
}
.footer__central {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__span {
  font-size: 0.8rem;
  text-align: center;
}
.footer__logos {
  width: 25%;
  display: flex;
  justify-content: center;
}
.logos__item {
  width: 4vw;
  margin: 1vw;
}

@media (max-width: 700px) {
  .footerContainer {
    flex-direction: column;
  }
  .footer__title {
    width: 50%;
  }
}
</style>