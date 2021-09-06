<template>
  <section class="profile">
    <h2>Mi Perfil</h2>
    <div class="profile__container">
      <article class="container__info">
        <img :src="currentUser.avatar" alt="Avatar de usuario" />
        <div>
          <h4>{{ currentUser.name }}</h4>
          <p>{{ currentUser.profession }}</p>
          <p>{{ currentUser.city }}</p>
        </div>
      </article>

      <article class="container__userTechniques">
        <h3>Mis técnicas favoritas</h3>
        <ul class="userTechniques__card">
          <li
            v-for="favoriteTechniques in currentUser.favoriteTechniques"
            :key="favoriteTechniques._id"
            class="card__item"
          >
            <div>
              <img
                class="card__ilustration"
                :src="favoriteTechniques.ilustration"
                alt="Ilustration tipo de técnica"
              />
              <h4>{{ favoriteTechniques.name }}</h4>
            </div>
          </li>
        </ul>
      </article>
      <article class="container__userTechniques">
        <h3>Técnicas que he compartido</h3>
        <ul class="userTechniques__card">
          <li
            v-for="techniquesProvided in currentUser.techniquesProvided"
            :key="techniquesProvided._id"
            class="card__item"
          >
            <div>
              <img
                class="card__ilustration"
                :src="techniquesProvided.ilustration"
                alt="Ilustration tipo de técnica"
              />
              <h4>{{ techniquesProvided.name }}</h4>
            </div>
          </li>
        </ul>
      </article>
    </div>
    <button @click="modal = !modal" class="button">Crear Técnica</button>
    <teleport to="#modals">
      <CreateTechniqueForm v-if="modal" class="modal" />
    </teleport>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { useRoute } from "vue-router";
import CreateTechniqueForm from "../components/CreateTechniqueForm.vue";

export default {
  name: "Profile",
  data() {
    return {
      modal: false,
    };
  },
  components: {
    CreateTechniqueForm,
  },
  computed: {
    ...mapState(["currentUser", "token"]),
  },
  methods: {
    ...mapActions(["userLogedFromApi"]),
  },
  mounted() {
    const route = useRoute();
    const { userId } = route.params;
    this.userLogedFromApi({ userId, token: this.token });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.profile {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  & h2 {
    margin-top: 3vw;
  }
}
.profile__container {
  display: flex;
  flex-direction: row;
  margin: 2vw;
  padding: 2vw;
}
.container__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 20vw;
    margin: 2vw;
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
.container__userTechniques {
  margin: 2vw;
  padding: 2vw;
  background-color: $regLogBlue;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5vw;
  & img {
    width: 5vw;
    border-radius: 50%;
    margin: 1vw;
  }
}
.userTechniques__card {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
  padding-inline-start: 0;
}
.card__item {
  & div {
    display: flex;
    flex-direction: row;
    padding: 1vw;
    align-items: center;
    background-color: $aqua;
    border-radius: 1.5vw;
    margin-top: 1vw;
  }
  & h4 {
    text-align: center;
    margin-left: 0.5vw;
  }
}

.modal {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
}
</style>
