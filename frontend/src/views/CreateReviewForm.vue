<template>
  <form
    @submit.prevent="handleSaveNewReview(currentUser, currentTechnique)"
    class="createReviewForm"
    data-test="createReviewForm__submit"
  >
    <h2>Reseñas</h2>
    <div class="createReviewForm__container">
      <div class="createReviewForm__profile">
        <article class="profile__info">
          <img :src="currentUser.avatar" alt="Avatar de usuario" />
          <div>
            <h4>{{ currentUser.name }}</h4>
            <p>{{ currentUser.profession }}</p>
            <p>{{ currentUser.city }}</p>
          </div>
        </article>
      </div>

      <div class="createReviewForm__inputs">
        <h3>{{ currentTechnique.name }}</h3>
        <label for="description"
          >Describe tu experiencia utilizando esta técnica:
          <textarea
            name="description"
            type="text"
            placeholder="Los participantes han disfrutado mucho..."
            v-model="newReview.description"
            required
          />
          <label class="search__options-label" for="techniques__type"
            >¿Qué puntaje le darías:</label
          >
          <select
            class="createReviewForm__select"
            name="select__score"
            id="select__score"
            v-model="newReview.score"
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
    </div>
    <div class="createReviewForm__buttons">
      <router-link to="/synergy/techniques/:techniqueId" class="router__button"
        >Volver sin crear
      </router-link>

      <button type="submit" class="button">Crear Reseña</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser", "currentTechnique"]),
  },
  methods: {
    ...mapActions(["createNewReview"]),

    handleSaveNewReview(user, technique) {
      this.createNewReview({
        ...this.newReview,
        user: user._id,
        technique: technique._id,
      });
      this.$router.push(`/synergy/techniques/${technique._id}`);
    },
  },
  data() {
    return {
      newReview: {
        description: "",
        score: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.createReviewForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin: 2vw;
  }
}
.createReviewForm__container {
  display: flex;
  flex-direction: row;
}
.createReviewForm__profile {
  display: flex;
  flex-direction: column;
  margin: 2vw;
  padding: 2vw;
}
.profile__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 20vw;
    margin: 2vw;
    border-radius: 50%;
  }
  & h4 {
    font-size: 2rem;
    color: $regLogBlue;
    text-align: center;
  }
  & p {
    text-align: center;
  }
}

.createReviewForm__inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2vw;
  padding: 2vw;
  border-radius: 1.5vw;
  background-color: rgba(10, 76, 99, 0.7);
  & label {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2vh;
  }
  & select,
  textarea {
    border: transparent;
    border-radius: 1.5vw;
    padding-left: 1vw;
    padding-right: 1vw;
    margin: 1vh;
    margin-left: 2vw;
  }
  & textarea {
    height: 20vh;
    width: 70%;
    margin: 1vh;
  }
}
.createReviewForm__buttons {
  display: flex;
  flex-direction: row;
}
.router__button {
  @include button;
  text-decoration: none;
  text-align: center;
  width: 12vw;
}

@media (max-width: 900px) {
  .createReviewForm__container {
    display: flex;
    flex-direction: column;
    padding: 2vw;
  }
  .router__button {
    width: 40vw;
  }
}
</style>