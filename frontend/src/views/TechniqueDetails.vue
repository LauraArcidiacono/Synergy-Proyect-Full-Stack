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
          <h2>{{ currentTechnique.name }}</h2>

          <div v-if="isTechniqueInFavorites()">
            <button class="header__favoriteButton">
              <i class="fas fa-heart disabled"></i>
            </button>
            <button
              v-if="isTechniqueInFavorites()"
              class="header__deleteButton"
              data-test="deleteTechniqueFromFavorite__button"
              @click="
                handleDeleteTechniqueFromFavorites(
                  currentUser,
                  currentTechnique
                )
              "
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <button
            v-else
            data-test="addTechniqueToFavorite__button"
            @click="
              handleAddToFavoriteTechniques(currentUser, currentTechnique)
            "
            class="button"
          >
            <i class="far fa-heart"></i> Añadir
          </button>
        </div>
        <div class="details__info">
          <h3>Tipo: {{ currentTechnique.type }}</h3>
          <h3>Tiempo: {{ currentTechnique.time }} minutos</h3>
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
      <h2>Reseñas</h2>
      <div class="techniqueDetails__reviewsContainer">
        <ul>
          <li
            v-for="review in currentTechniqueReviews"
            :key="review._id"
            class="reviews__cards"
          >
            <article class="cards__review">
              <img :src="review.user.avatar" alt="Avatar de usuario" />
              <div>
                <h3>{{ review.user.name }}</h3>
                <p>{{ review.user.profession }}</p>
                <p>{{ review.description }}</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
    <section class="techniqueDetails__buttons">
      <router-link to="/synergy/profile/:userId" class="button"
        >Volver a mi Perfil
      </router-link>
      <router-link to="/synergy/techniques/createtereviewform" class="button"
        >Crear Reseña
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
    ...mapState(["currentUser", "currentTechnique", "currentTechniqueReviews"]),
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
  margin-right: 5vw;
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
  @include button;
  border: transparent;
  color: black;
  background-color: $regLogBlue;
  width: 5vw;
  &:hover {
    background-color: $pinkLight;
  }
}

.header__favoriteButton {
  @include button;
  background-color: $aquaHeader;
  color: $blue;
  border: solid 0.2vw $blue;
  cursor: auto;
  width: 5vw;
  &:hover {
    background-color: $aquaHeader;
  }
}

.details__info {
  display: flex;
  flex-direction: row;
  & h3 {
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
  text-decoration: none;
  text-align: center;
  width: 12vw;
}
.techniqueDetails__reviews {
  @include reviews__container;
  & h2 {
    text-align: center;
    font-size: 2rem;
  }
}
.techniqueDetails__reviewsContainer {
  display: flex;
  flex-direction: row;
  & ul {
    display: flex;
    flex-direction: row;
    padding-inline-start: 0px;
  }
}
.reviews__cards {
  @include reviews__cards;
  width: 40%;
}
.techniqueDetails__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 800px) {
  .details__info {
    display: flex;
    flex-direction: column;
  }
  .details__info-details {
    width: 90%;
  }

  .header__deleteButton,
  .header__favoriteButton {
    width: 10vw;
    border: solid 0.4vw $blue;
  }
  .techniqueDetails__reviews {
    & h2 {
      font-size: 6vw;
    }
  }
  .techniqueDetails__reviewsContainer {
    display: flex;
    flex-direction: column;

    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-inline-start: 0px;
    }
  }
  .reviews__cards {
    @include reviews__cards;
    width: 80%;
  }
  .button {
    width: 40vw;
  }
}
</style>