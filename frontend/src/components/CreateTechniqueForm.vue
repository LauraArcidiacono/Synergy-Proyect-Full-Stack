<template>
  <section class="createTechniqueForm">
    <h2>Crea una nueva técnica para compartir</h2>
    <div class="createTechniqueForm__container">
      <div class="createTechniqueForm__inputs">
        <label for="name"
          >Nombre:
          <input
            name="name"
            type="name"
            placeholder="Planificación de tareas"
            v-model="name"
          />
        </label>

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

        <label for="time"
          >Tiempo:
          <input name="time" type="time" placeholder="35" v-model="time" />
        </label>

        <label for="goal"
          >Objetivo:
          <textarea
            name="goal"
            type="text"
            placeholder="Analizar la forma en que..."
            v-model="goal"
          />
        </label>

        <label for="material"
          >Material:
          <textarea
            name="material"
            type="text"
            placeholder="Folios, bolis..."
            v-model="material"
          />
        </label>

        <label for="task"
          >Consigna:
          <textarea
            name="task"
            type="text"
            placeholder="Formar grupos de..."
            v-model="task"
          />
        </label>

        <label for="workflow"
          >Dinámica grupal:
          <textarea
            name="workflow"
            type="text"
            placeholder="Esta tecnica moviliza reflexiones acerca de..."
            v-model="workflow"
          />
        </label>
        <span>Completa todos los campos</span>
      </div>
    </div>
    <button class="button">Crear Técnica</button>
  </section>
</template>

<script>
export default {};
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
}
</style>