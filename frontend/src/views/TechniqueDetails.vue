<template>
  <div class="techniqueDetails">
    <section class="techniqueDetails__info">
      <div class="info__ilustration">
        <img
          :src="currentTechnique.ilustration"
          alt="Ilustracion tipo de técnica"
        />
      </div>
      <div>
        <div class="details__header">
          <h3>{{ currentTechnique.name }}</h3>
          <button class="button">Añadir a favoritas</button>
        </div>
        <div class="details__info">
          <h4>Tipo: {{ currentTechnique.type }}</h4>
          <h4>Tiempo: {{ currentTechnique.time }} minutos</h4>
        </div>
        <div class="details__info-details">
          <article>Objetivo: {{ currentTechnique.goal }}</article>
          <article>Materiales: {{ currentTechnique.material }}</article>
          <article>Consigna: {{ currentTechnique.task }}</article>
          <article>Dinámica: {{ currentTechnique.workflow }}</article>
        </div>
      </div>
    </section>
    <section class="techniqueDetails__reviews">
      <h3>Reseñas</h3>
      <ul>
        <li
          v-for="review in currentTechnique.reviews"
          :key="review._id"
          class="reviews__cards"
        >
          <article class="cards__review">
            <img :src="review.user.avatar" alt="Avatar de usuario" />
            <div>
              <h4>{{ review.user.name }}</h4>
              <p>{{ review.user.profession }}</p>
              <p>{{ review.description }}</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
    <section class="techniqueDetails__buttons">
      <button class="button">Crear Reseña</button>
      <button class="button">Volver</button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "TechniqueDetails",
  computed: {
    ...mapState(["currentTechnique"]),
  },
  methods: {
    ...mapActions(["fetchOneTechniqueFromApi"]),
  },
  mounted() {
    const route = useRoute();
    const { techniqueId } = route.params;
    this.fetchOneTechniqueFromApi(techniqueId);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.techniqueDetails {
  width: 100%;
}
.techniqueDetails__info {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.info__ilustration {
  display: flex;
  align-items: center;
  & img {
    width: 20vw;
    border-radius: 50%;
    margin: 3vw;
  }
}
.info__details {
  margin: 3vw;
}
.details__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.details__info {
  display: flex;
  flex-direction: row;
  & h4 {
    margin: 2vw;
  }
}
.details__info-details {
  & article {
    border: solid 0.05vw $greyBox;
    margin: 2vw;
    padding: 2vw;
  }
}
.button {
  @include button;
}
.techniqueDetails__reviews {
  @include reviews__container;
}
.reviews__cards {
  @include reviews__cards;
}
.techniqueDetails__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>