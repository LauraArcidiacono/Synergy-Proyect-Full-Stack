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

          <div v-if="isTechniqueInFavorites()">
            <button
              v-if="isTechniqueInFavorites()"
              class="header__deleteButton"
              @click="
                handleDeleteTechniqueFromFavorites(
                  currentUser,
                  currentTechnique
                )
              "
            >
              X
            </button>
            <button class="header__favoriteButton">Favorita</button>
          </div>
          <button
            v-else
            @click="
              handleAddToFavoriteTechniques(currentUser, currentTechnique)
            "
            class="button"
          >
            Añadir a favoritas
          </button>
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
      <router-link to="/synergy/profile/:userId">
        <button class="button">Volver a mi Perfil</button>
      </router-link>
      <router-link to="/synergy/techniques/createtereviewform">
        <button class="button">Crear Reseña</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "TechniqueDetails",
  computed: {
    ...mapState(["currentUser", "currentTechnique"]),
  },
  methods: {
    ...mapActions([
      "fetchOneTechniqueFromApi",
      "putOnUserFavoriteTechniques",
      "deleteTechniqueFromFavorite",
    ]),

    ...mapGetters(["isTechniqueInFavorites"]),

    handleAddToFavoriteTechniques(currentUser, currentTechnique) {
      this.putOnUserFavoriteTechniques({
        userId: currentUser._id,
        techniqueId: currentTechnique._id,
      });
    },

    handleDeleteTechniqueFromFavorites(currentUser, currentTechnique) {
      this.deleteTechniqueFromFavorite({
        userId: currentUser._id,
        techniqueId: currentTechnique._id,
      });
      this.$router.push(`/synergy/profile/${currentUser._id}`);
    },
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
.header__deleteButton {
  border-radius: 50%;
  border: solid 0.5vw $blue;
  color: $pinkStrong;
  background-color: $aquaHeader;
}

.header__favoriteButton {
  @include button;
  background-color: $aquaHeader;
  color: $blue;
  border: solid 0.5vw $blue;
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