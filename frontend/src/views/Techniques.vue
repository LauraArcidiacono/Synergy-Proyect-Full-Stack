<template>
  <div class="techniquesList">
    <img
      class="techniquesList__title"
      src="../images/Nombre.png"
      alt="Logo Synergy"
    />
    <section class="techniquesList__search">
      <div class="search__options">
        <label class="search__options-label" for="techniques__type"
          >Tipo de Técnica:</label
        >
        <select
          class="search__options-select"
          name="techniques__type"
          id="techniques__type"
        >
          <option value="palnificacion">Planificación</option>
          <option value="confianza">Confianza</option>
          <option value="logro de metas">Logro de metas</option>
          <option value="comunicacion">Comunicación</option>
          <option value="presentacion">Presentación</option>
          <option value="animacion">Animación</option>
        </select>
      </div>
      <div class="search__options">
        <label class="search__options-label" for="gsearch"
          >Palabras clave</label
        >
        <input
          class="search__options-input"
          type="search"
          id="search"
          name="search"
        />
        <button class="button">Buscar</button>
      </div>
    </section>
    <ul class="technique__card">
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
export default {
  name: "Techniques",
  components: {
    TechniqueCard,
  },
  computed: {
    ...mapState(["techniques", "token"]),
  },
  methods: {
    ...mapActions(["fetchTechniquesFromApi"]),
  },
  mounted() {
    this.fetchTechniquesFromApi();
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
  width: 60%;
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
.technique__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: wrap;
  align-items: center;
  justify-content: center;
}
.card__item {
  @include technique__item;
}
.techniquesList__search {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 2vw;
}
</style>
