<template>
  <div class="about">
    <h2>This is the TECHNIQUES page</h2>
    <p>Aquí se verá la lista de técnicas</p>
    <ul class="technique__card">
      <li
        v-for="technique in techniques"
        :key="technique._id"
        class="card__item"
      >
        <TechniqueCard
          :name="technique.name"
          :type="technique.type"
          :goal="technique.goal"
          :ilustration="technique.ilustration"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TechniqueCard from "../components/TechniqueCard.vue";
export default {
  name: "Techniques",
  components: {
    TechniqueCard,
  },
  computed: {
    ...mapState(["techniques"]),
  },
  methods: {
    ...mapActions(["fetchTechniquesFromApi"]),
  },
  mounted() {
    this.fetchTechniquesFromApi();
  },
};
</script>

<style lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";
.technique__card {
  display: flex;
  flex-direction: row;
}
.card__item {
  @include technique__item;
}
</style>
