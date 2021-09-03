<template>
  <section class="dashboard">
    <img
      class="dashboard__image"
      src="../images/Nombre.png"
      alt="Logo Synergy"
    />
    <div class="dashboard__articles">
      <article class="articles__techniques">
        <h3>Técnicas</h3>
        <p>
          En este apartado podrás encontrar diversas técnicas para trabajar con
          tus grupos.
        </p>
        <p>
          Puedes hacer búsquedas por tipo de técnica o por palabras clave,
          conocer las opiniones de otras personas que las han implementado,
          dejar tu propia reseña y guardarlas en tu lista de favoritas para
          tenerlas siempre a mano
        </p>
        <button class="button">Ver Técnicas</button>
      </article>
      <article class="articles_resources">
        <h3>Recursos</h3>
        <p>
          En este apartado encontrarás bibliografía muy úitl para seguir
          investigando acerca de lo grupal y diversas técnicas que puedes
          implementar.
        </p>
        <p>
          Tambien encontrarás el link a las editoriales para que puedas acceder
          fácilmente a consultar por la disponibilidad de cada libro.
        </p>
        <button class="button">Ver Recursos</button>
      </article>
      <article class="articles__profile">
        <h3>Perfil</h3>
        <p>
          En este apartado encontrarás tus datos personales, las técnicas que
          has seleccionado como favoritas y podrás compartir técnicas que
          conoces y consideras valiosas para que otras personas tamcién puedan
          implementarlas.
        </p>
        <button class="button">Ver mi Perfil</button>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss">
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dashboard__image {
  width: 70%;
  margin-top: 2vw;
}
.dashboard__articles {
  display: flex;
  flex-direction: row;
  & h3 {
    font-size: 2.5rem;
    margin-bottom: 1vw;
  }
  & p {
    text-align: center;
    padding: 1vw;
  }
}
.articles__techniques {
  @include article__container;
  background-color: $pinkLightOp;
}
.articles_resources {
  @include article__container;
  background-color: $aquaHeader;
}
.articles__profile {
  @include article__container;
  background-color: $pinkLightOp;
}
</style>