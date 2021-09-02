<template>
  <section class="technique__card">
    <ul>
      <li v-for="technique in techniques" :key="technique._id">
        <img
          class="card__ilustration"
          src="../images/ilustrations/Finances.png"
          alt="Imagen tipo Palnificacion"
        />
        <div class="card__info">
          <h3>Nombre: {{ technique.name }}</h3>
          <p>Tipo: {{ technique.type }}</p>
          <p>Objetivo: {{ technique.goal }}</p>
        </div>
        <button class="button">Ver Detalles</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TechniqueCard",
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
  @include technique__card;
}
.button {
  @include button;
}
.card__ilustration {
  @include card__ilustration;
}
</style>