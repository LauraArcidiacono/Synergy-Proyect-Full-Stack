<template>
  <section class="techniqueList__card">
    <div class="card__ilustration">
      <img class="ilustration" :src="ilustration" alt="Imagen tipo" />
    </div>
    <div class="card__info">
      <h3>{{ name }}</h3>
      <p>Tipo: {{ type }}</p>
      <p>Objetivo: {{ goal }}</p>

      <router-link :to="'/synergy/techniques/' + _id" class="button">
        Ver Detalles</router-link
      >
    </div>
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
  width: 80%;
  flex: wrap;
}
.card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card__ilustration {
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ilustration {
  display: flex;
  width: 13vw;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.button {
  @include button;
  text-decoration: none;
  padding: 2vw;
}
.card__ilustration {
  @include card__ilustration;
}

@media (max-width: 780px) {
  .ilustration {
    display: flex;
    width: 22vw;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
}
</style>