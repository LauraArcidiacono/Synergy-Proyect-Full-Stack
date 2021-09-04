<template>
  <footer class="footer">
    <img
      class="footer__logo"
      src="../images/DinamicasGrupales.png"
      alt="Logo Synergy"
    />
    <div class="footer__central">
      <img
        class="footer__title"
        src="../images/Synergy.png"
        alt="Synergy Dinámicas Grupales"
      />
      <span class="footer__span">by Laura Arcidiacono</span>
      <span class="footer__span">Todos los derechos reservados</span>
      <span class="footer__span">© 2000-2021</span>
    </div>
    <div class="footer__logos">
      <img
        class="logos__item"
        src="../images/logoTwiter.png"
        alt="Logo Twiter"
      />
      <img
        class="logos__item"
        src="../images/logoFacebook.png"
        alt="Logo Facebook"
      />
      <img
        class="logos__item"
        src="../images/logoInstagram.png"
        alt="Logo Instagram"
      />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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