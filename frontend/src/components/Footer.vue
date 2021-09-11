<template>
  <footer class="footer">
    <img
      class="footer__logo"
      :src="this.images.logoSynergy"
      alt="Logo Synergy"
    />
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
footer {
  width: 100%;
  display: flex;
  height: 30vh;
  background-color: rgb(215, 234, 226);
  align-items: center;
  justify-content: space-between;
}
.footer__logo {
  height: 90%;
  margin: 1vh;
}
.footer__title {
  width: 25%;
}
.footer__central {
  width: 60%;
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
  display: flex;
  height: 70%;
  align-items: center;
}
.logos__item {
  height: 20vw;
  margin: 1vw;
}
</style>