<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  font-family: "Poppins", sans-serif, Arial;
}


</style>
