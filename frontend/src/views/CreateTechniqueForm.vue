<template>
  <form
    @submit.prevent="handleSaveNewTechnique(currentUser._id)"
    class="createTechniqueForm"
  >
    <h2>Crea una nueva técnica para compartir</h2>
    <div class="createTechniqueForm__container">
      <div class="createTechniqueForm__inputs">
        <label for="name"
          >Nombre:
          <input
            name="name"
            type="text"
            placeholder="Planificación de tareas"
            v-model.trim="newTechnique.name"
            required
          />
        </label>

        <label class="search__options-label" for="techniques__type"
          >Tipo de Técnica:</label
        >
        <select
          class="search__options-select"
          name="techniques__type"
          id="techniques__type"
          v-model="newTechnique.type"
        >
          <option value="palnificacion">Planificación</option>
          <option value="confianza">Confianza</option>
          <option value="metas">Logro de metas</option>
          <option value="comunicacion">Comunicación</option>
          <option value="presentacion">Presentación</option>
          <option value="animacion">Animación</option>
        </select>

        <label for="time"
          >Tiempo:
          <input
            name="time"
            type="number"
            placeholder="35"
            v-model.number="newTechnique.time"
          />
        </label>

        <label for="goal"
          >Objetivo:
          <textarea
            name="goal"
            type="text"
            placeholder="Analizar la forma en que..."
            v-model.trim="newTechnique.goal"
          />
        </label>

        <label for="material"
          >Material:
          <textarea
            name="material"
            type="text"
            placeholder="Folios, bolis..."
            v-model.trim="newTechnique.material"
          />
        </label>

        <label for="task"
          >Consigna:
          <textarea
            name="task"
            type="text"
            placeholder="Formar grupos de..."
            v-model.trim="newTechnique.task"
          />
        </label>

        <label for="workflow"
          >Dinámica grupal:
          <textarea
            name="workflow"
            type="text"
            placeholder="Esta tecnica moviliza reflexiones acerca de..."
            v-model.trim="newTechnique.workflow"
          />
        </label>
        <span>Completa todos los campos</span>
      </div>
    </div>
    <div class="createTechniqueForm__buttons">
      <router-link to="/synergy/profile/:userId">
        <button class="button">Volver sin crear</button>
      </router-link>
      <button type="submit" class="button">Crear Técnica</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import imagesURLs from "../assets/constants";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["createNewTechnique"]),

    handleSaveNewTechnique(userId) {
      this.createNewTechnique({
        ...this.newTechnique,
        userProvider: userId,
        ilustration: this.ilustrationsSRC[`${this.newTechnique.type}`],
      });
      this.$router.push(`/synergy/profile/${userId}`);
    },
  },
  data() {
    return {
      newTechnique: {
        name: "",
        type: "",
        time: 0,
        goal: "",
        material: "",
        task: "",
        workflow: "",
      },
      ilustrationsSRC: imagesURLs,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.createTechniqueForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  & h2 {
    margin: 2vw;
  }
}
.createTechniqueForm__container {
  display: flex;
  flex-direction: row;
  & span {
    text-align: center;
  }
}
.createTechniqueForm__inputs {
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
  }
  & input,
  select,
  textarea {
    border: transparent;
    border-radius: 1.5vw;
    padding-left: 1vw;
    padding-right: 1vw;
    margin: 1vh;
    margin-left: 2vw;
  }
  & textarea {
    height: 10vh;
    width: 70%;
    margin: 1vh;
  }
  & img {
    display: none;
  }
}
.createTechniqueForm__buttons {
  display: flex;
  flex-direction: row;
}
</style>