<template>
  <section class="profile">
    <h2>Mi Perfil</h2>
    <div class="profile__container">
      <article class="container__info">
        <img src="../images/avatar1.png" alt="Avatar de usuario" />
        <div>
          <h4>Clara Carzolio</h4>
          <p>Profesora</p>
          <p>Madrid</p>
        </div>
      </article>

      <article class="container__userTechniques">
        <h3>Mis técnicas favoritas</h3>
        <ul class="userTechniques__card">
          <li class="card__item">
            <div>
              <img
                class="card__ilustration"
                src="../images/ilustrations/Comunicacion.png"
                alt="Imagen tipo Palnificacion"
              />
              <h4>Nombre de una tecnica</h4>
            </div>
          </li>
          <li class="card__item">
            <div>
              <img
                class="card__ilustration"
                src="../images/ilustrations/Metas.png"
                alt="Imagen tipo Palnificacion"
              />
              <h4>Nombre de una tecnica</h4>
            </div>
          </li>
        </ul>
      </article>
      <article class="container__userTechniques">
        <h3>Técnicas que he compartido</h3>
        <ul class="userTechniques__card">
          <li class="card__item">
            <div>
              <img
                class="card__ilustration"
                src="../images/ilustrations/ventana.png"
                alt="Imagen tipo Palnificacion"
              />
              <h4>Nombre de una tecnica</h4>
            </div>
          </li>
        </ul>
      </article>
    </div>
    <button class="button">Crear Técnica</button>
  </section>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss">
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
</style>
