<template>
  <div>
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
