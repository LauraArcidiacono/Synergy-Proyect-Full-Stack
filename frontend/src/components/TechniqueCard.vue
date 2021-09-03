<template>
  <section class="techniqueList__card">
    <ul class="technique__card">
      <li v-for="technique in techniques" :key="technique._id" class="card__item">
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

.techniqueList__card {
display: flex;
flex-direction:column;
width: 100%;
}
.technique__card {
  display: flex;
  flex-direction: row;
}
.card__item {
  @include technique__item;
 
}
.button {
  @include button;
}
.card__ilustration {
  @include card__ilustration;
}
</style>