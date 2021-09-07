<template>
  <section class="techniqueList__card">
    <img class="card__ilustration" :src="ilustration" alt="Imagen tipo" />
    <div class="card__info">
      <h3>{{ name }}</h3>
      <p>Tipo: {{ type }}</p>
      <p>Objetivo: {{ goal }}</p>
    </div>
    <router-link :to="'/synergy/techniques/' + _id">
      <button class="button">Ver Detalles</button></router-link
    >
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TechniqueCard",
  props: {
    name: String,
    type: String,
    goal: String,
    ilustration: String,
    _id: String,
  },
  computed: {
    ...mapState(["currentTechnique"]),
  },
  methods: {
    ...mapActions(["fetchOneTechniqueFromApi"]),
  },
  mounted() {
    this.fetchOneTechniqueFromApi();
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.techniqueList__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: wrap;
}

.button {
  @include button;
}
.card__ilustration {
  @include card__ilustration;
}
</style>