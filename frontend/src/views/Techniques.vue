<template>
  <div class="about">
    <h2>This is the TECHNIQUES page</h2>
    <p>Aquí se verá la lista de técnicas</p>

    <TechniqueCard />
  </div>
</template>

<script>
import TechniqueCard from "../components/TechniqueCard.vue";
export default {
  name: "Techniques",
  components: {
    TechniqueCard,
  },
};
</script>

<style>
</style>
