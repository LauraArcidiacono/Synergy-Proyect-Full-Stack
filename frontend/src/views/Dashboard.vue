<template>
  <section class="dashboard">
    <img
      class="dashboard__image"
      :src="this.images.tituloSynergy"
      alt="Logo Synergy"
    />
    <div class="dashboard__articles">
      <article class="articles__techniques">
        <h2>Técnicas</h2>
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
        <router-link to="/synergy/techniques" class="button">
          Ver Técnicas</router-link
        >
      </article>
      <article class="articles_resources">
        <h2>Recursos</h2>
        <p>
          En este apartado encontrarás bibliografía muy úitl para seguir
          investigando acerca de lo grupal y diversas técnicas que puedes
          implementar.
        </p>
        <p>
          Tambien encontrarás el link a las editoriales para que puedas acceder
          fácilmente a consultar por la disponibilidad de cada libro.
        </p>
        <router-link to="/synergy/resources" class="button">
          Ver Recursos</router-link
        >
      </article>
      <article class="articles__profile">
        <h2>Perfil</h2>
        <p>
          En este apartado encontrarás tus datos personales, las técnicas que
          has seleccionado como favoritas y podrás compartir técnicas que
          conoces y consideras valiosas para que otras personas también puedan
          implementarlas.
        </p>
        <router-link :to="'/synergy/profile/' + currentUser._id" class="button"
          >Ver mi Perfil</router-link
        >
      </article>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import imagesURLs from "../assets/constants";

export default {
  name: "Dashboard",
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      images: imagesURLs,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dashboard__image {
  width: 10%;
  margin-top: 2vw;
}
.dashboard__articles {
  display: flex;
  flex-direction: row;
  & h2 {
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
.button {
  text-decoration: none;
  text-align: center;
}

@media (max-width: 800px) {
  .dashboard__articles {
    flex-direction: column;
    align-items: center;
  }
  .articles__techniques,
  .articles_resources,
  .articles__profile {
    width: 80%;
  }
}
</style>