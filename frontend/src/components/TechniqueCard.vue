<template>
  <section class="techniqueList__card">
    <img
      class="card__ilustration"
      :src="ilustration"
      alt="Imagen tipo Palnificacion"
    />
    <div class="card__info">
      <h3>{{ name }}</h3>
      <p>Tipo: {{ type }}</p>
      <p>Objetivo: {{ goal }}</p>
    </div>
    <button class="button">Ver Detalles</button>
  </section>
</template>

<script>
export default {
  name: "TechniqueCard",
  props: {
    name: String,
    type: String,
    goal: String,
    ilustration: String,
  },
};
</script>

<style lang="scss">
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