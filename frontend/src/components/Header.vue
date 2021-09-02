<template>
  <header class="header">
    <img
      class="header__logo"
      src="../images/DinamicasGrupales.png"
      alt="Logo Synergy"
    />
    <div class="header__nav">
      <router-link to="/techniques" class="nav__item">Techniques</router-link>
      <router-link to="/profile" class="nav__item">Profile</router-link>
      <router-link to="/resources" class="nav__item">Resources</router-link>
      <router-link to="/loginRegister" class="nav__item">Ingresar</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  height: 30vh;
  background-color: rgb(215, 234, 226);
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
}
</style>