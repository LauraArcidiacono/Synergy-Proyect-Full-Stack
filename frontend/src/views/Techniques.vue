<template>
  <div class="techniquesList">
    <img
      class="techniquesList__title"
      :src="this.images.tituloSynergy"
      alt="Logo Synergy"
    />
    <h2>Lista de Técnicas disponibles</h2>
    <section class="techniquesList__search">
      <div class="search__options">
        <label class="search__options-label" for="techniques__type"
          >Tipo de Técnica:</label
        >
        <select
          class="search__options-select"
          name="techniques__type"
          id="techniques__type"
          v-model="filterValue"
        >
          <option value="palnificacion" @click="filterTechniques(filterValue)">
            Planificación
          </option>
          <option value="confianza" @click="filterTechniques(filterValue)">
            Confianza
          </option>
          <option value="logro de metas" @click="filterTechniques(filterValue)">
            Logro de metas
          </option>
          <option value="comunicacion" @click="filterTechniques(filterValue)">
            Comunicación
          </option>
          <option value="presentacion" @click="filterTechniques(filterValue)">
            Presentación
          </option>
          <option value="animacion" @click="filterTechniques(filterValue)">
            Animación
          </option>
        </select>
      </div>
      <div class="search__options">
        <label class="search__options-label" for="search">Palabras clave</label>
        <input
          class="search__options-input"
          type="search"
          id="search"
          name="search"
        />
        <button class="button">Buscar</button>
      </div>
    </section>
    <ul class="technique__cards">
      <li
        v-for="technique in techniques"
        :key="technique._id"
        class="card__item"
      >
        <TechniqueCard
          :name="technique.name"
          :type="technique.type"
          :goal="technique.goal"
          :ilustration="technique.ilustration"
          :_id="technique._id"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TechniqueCard from "../components/TechniqueCard.vue";
import { mapActions, mapState } from "vuex";
import imagesURLs from "../assets/constants";

export default {
  name: "Techniques",
  components: {
    TechniqueCard,
  },
  computed: {
    ...mapState(["techniques", "token"]),
  },
  methods: {
    ...mapActions(["fetchTechniquesFromApi", "filterTechniques"]),
  },
  mounted() {
    this.fetchTechniquesFromApi();
  },
  data() {
    return {
      images: imagesURLs,
      filterValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.techniquesList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.techniquesList__title {
  width: 27%;
  margin-top: 2vw;
}

.search__options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.search__options-label {
  margin: 1vw;
}
.search__options-select {
  height: 4vh;
  font-size: 2.5vh;
}
.search__options-input {
  height: 4vh;
  font-size: 2.5vh;
}
.technique__cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  flex: wrap;
  align-items: center;
  justify-content: center;
  padding-inline-start: 0;
}
.card__item {
  @include technique__item;
  min-height: 55vh;
}
.techniquesList__search {
  display: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 2vw;
}

@media (max-width: 780px) {
  .technique__card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .card__item {
    @include technique__item;
    width: 75%;
    min-height: 30vh;
  }
}
</style>
