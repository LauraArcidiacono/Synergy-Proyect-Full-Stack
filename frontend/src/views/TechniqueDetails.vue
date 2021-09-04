<template>
  <div class="techniqueDetails">
    <section class="techniqueDetails__info">
      <div class="info__ilustration">
        <img
          src="../images/ilustrations/ventana.png"
          alt="Ilustracion tipo de técnica"
        />
      </div>
      <div>
        <div class="details__header">
          <h3>Avíso Clasificado</h3>
          <button class="button">Añadir a favoritas</button>
        </div>
        <div class="details__info">
          <h4>Tipo: Presentación</h4>
          <h4>Tiempo: ---- minutos</h4>
        </div>
        <div class="details__info-details">
          <article>Objetivo:</article>
          <article>Materiales:</article>
          <article>Consigna:</article>
          <article>Dinámica:</article>
        </div>
      </div>
    </section>
    <section class="techniqueDetails__reviews">
      <h3>Reseñas</h3>
      <div class="reviews__cards">
        <article class="cards__review">
          <img src="../images/avatar1.png" alt="Avatar de usuario" />
          <div>
            <h4>Clara Carzolio</h4>
            <p>Profesora</p>
            <p>Description bla bla bla bla bla bla bla bla</p>
          </div>
        </article>
        <article class="cards__review">
          <img src="../images/avatar2.png" alt="Avatar de usuario" />
          <div>
            <h4>Natalia Landa</h4>
            <p>Psicologa</p>
            <p>Description bla bla bla bla bla bla bla bla</p>
          </div>
        </article>
        <article class="cards__review">
          <img src="../images/avatar3.png" alt="Avatar de usuario" />
          <div>
            <h4>Ana Maidana</h4>
            <p>Tallerista</p>
            <p>Description bla bla bla bla bla bla bla bla</p>
          </div>
        </article>
      </div>
    </section>
    <section class="techniqueDetails__buttons">
      <button class="button">Crear Reseña</button>
      <button class="button">Volver</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "TechniqueDetails",
};
</script>

<style lang="scss">
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