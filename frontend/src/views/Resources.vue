<template>
  <div class="resources">
    <h2>Resources</h2>
    <section class="resources__items">
      <div class="items__book">
        <div Class="book__image">
          <img
            src="../images/resources/pedagogiaDeLaEsperanza.jpg"
            alt="Portada Libro"
          />
        </div>
        <div class="book__info">
          <h3>Pedagogía de la Esperanza</h3>
          <h4>Paulo Freire</h4>
          <a href="https://www.sigloxxieditores.com/">Siglo XXI Editores</a>
        </div>
      </div>
      <div class="items__book">
        <div Class="book__image">
          <img
            src="../images/resources/pedagogiaDeLaEsperanza.jpg"
            alt="Portada Libro"
          />
        </div>
        <div class="book__info">
          <h3>Pedagogía de la Esperanza</h3>
          <h4>Paulo Freire</h4>
          <a href="https://www.sigloxxieditores.com/">Siglo XXI Editores</a>
        </div>
      </div>
      <div class="items__book">
        <div Class="book__image">
          <img
            src="../images/resources/pedagogiaDeLaEsperanza.jpg"
            alt="Portada Libro"
          />
        </div>
        <div class="book__info">
          <h3>Pedagogía de la Esperanza</h3>
          <h4>Paulo Freire</h4>
          <a href="https://www.sigloxxieditores.com/">Siglo XXI Editores</a>
        </div>
      </div>
      <div class="items__book">
        <div Class="book__image">
          <img
            src="../images/resources/pedagogiaDeLaEsperanza.jpg"
            alt="Portada Libro"
          />
        </div>
        <div class="book__info">
          <h3>Pedagogía de la Esperanza</h3>
          <h4>Paulo Freire</h4>
          <a href="https://www.sigloxxieditores.com/">Siglo XXI Editores</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Resources",
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.resources {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2vw;
}
.items__book {
  display: flex;
  flex-direction: row;
  width: 45vw;
  background-color: rgba(10, 76, 99, 0.7);
  margin: 2vw;
  border-radius: 1.5vw;
  & img {
    width: 100%;
    background-color: $regLogBlue;
    border-radius: 1vw;
  }
  & div {
    display: flex;
    text-align: center;
    margin: 2vw;
    flex-direction: column;
    justify-content: center;
  }
}
.book__image {
  flex: 0.5;
}
.book__info {
  flex: 1;
  & h3,
  h4,
  a {
    background-color: $aquaHeader;
    padding: 1vw;
    border-radius: 1.5vw;
    text-decoration: none;
  }
  & h3,
  h4 {
    margin-bottom: 1vw;
  }
}
</style>