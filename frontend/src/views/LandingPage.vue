<template>
  <div class="landingPage">
    <article class="landingPage__presentation">
      <div class="presentation__info">
        <h2>¿Por qué Synergy?</h2>
        <p>
          El grupo es sinónimo de potencia: creativa, productiva, elaborativa.
          Pero, esa potencia no siempre se alcanza.
        </p>
        <p>
          A través de diversas técnicas podemos acompañar a los grupos y a cada
          uno de sus miembros a potenciar la espontaneidad y creatividad,
          fomentando un ambiente de trabajo colaborativo y de compromiso.
        </p>
      </div>
      <div class="landingPage__logo">
        <img :src="this.images.logoSynergy" alt="Logo Synergy" />
      </div>
    </article>
    <section class="landingPage__cardExamples">
      <img :src="this.images.presentacion" alt="Ilustracion tipo de técnica" />
      <img :src="this.images.animacion" alt="Ilustracion tipo de técnica" />
      <img :src="this.images.comunicacion" alt="Ilustracion tipo de técnica" />
      <img :src="this.images.metas" alt="Ilustracion tipo de técnica" />
      <img :src="this.images.confianza" alt="Ilustracion tipo de técnica" />
      <img :src="this.images.planificacion" alt="Ilustracion tipo de técnica" />
    </section>
    <section class="landingPage__fundamentals">
      <div class="fundamentals__info">
        <h3>Principios</h3>
        <p>Inclusión</p>
        <p>Participación</p>
        <p>Respeto</p>
        <p>Confianza</p>
        <p>Descubrimiento</p>
        <p>Auto-descubrimiento</p>
      </div>
      <div>
        <img
          class="landingPage__logo"
          :src="this.images.escalera"
          alt="Ilustracion tipo de técnica"
        />
      </div>
    </section>
    <section class="landingPage__rules">
      <h3>Cómo funciona la página</h3>
      <div class="rules__container">
        <ul class="rules__ul">
          <div>
            <li>
              Para acceder a las técnicas y recursos, deberás registrarte.
            </li>
            <li>Podrás busar técnicas para trabajar con tus grupos.</li>
            <li>Podrás compartir tecnicas con la comunidad.</li>
            <li>Podrás buscar técnicas por tipos y temas.</li>
            <li>Guardarlas en tu lista de favoritas.</li>
            <li>Ver y realizar reseñas de las tecnicas</li>
          </div>
        </ul>
      </div>
    </section>
    <section class="landingPage__reviews">
      <h3>Reseñas</h3>
      <div class="reviews__cards">
        <article class="cards__review">
          <img :src="this.images.avatarClara" alt="Avatar de usuario" />
          <div>
            <h4>Clara Carzolio</h4>
            <p>Soy profesora y la uso siempre al preparar mis clases!</p>
          </div>
        </article>
        <article class="cards__review">
          <img :src="this.images.avatarNatalia" alt="Avatar de usuario" />
          <div>
            <h4>Natalia Landa</h4>
            <p>
              Muy util e interactiva. Me encanta el diseño y el flujo de la
              página. Sigan así!
            </p>
          </div>
        </article>
        <article class="cards__review">
          <img :src="this.images.avatarAldana" alt="Avatar de usuario" />
          <div>
            <h4>Aldana Arci</h4>
            <p>
              Increible herramienta! Me ayuda mucho con mi trabajo y los grupos
              realmente se potencian.
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import imagesURLs from "../assets/constants";

export default {
  name: "LandingPage",
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

.landingPage__presentation {
  display: flex;
  flex-direction: row;
  margin: 4vw;
}
.landingPage__logo {
  margin-top: 4vh;
  height: 20vw;
  & img {
    height: 20vw;
  }
}
.presentation__info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 1.5vw;
  margin: 2vw;
  padding: 1vw;
  flex-wrap: wrap;
  background-color: $pinkLight;
  width: 45%;
}
.landingPage {
  width: 100%;
}

.landingPage__cardExamples {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & img {
    width: 20vw;
  }
}
.landingPage__fundamentals {
  display: flex;
  flex-direction: row;
  margin: 4vw;
  justify-content: space-around;
  align-items: center;
}
.fundamentals__info {
  @include article__container;
  background-color: $pinkLightOp;
}
.landingPage__rules {
  @include article__container;
  background-color: $pinkLightOp;
  width: 80%;
}
.rules__container {
  display: flex;
}
.rules__ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2vw;
  list-style: none;
  & li {
    margin: 1vw;
    text-align: center;
  }
}
.landingPage__reviews {
  @include reviews__container;
}
.reviews__cards {
  @include reviews__cards;
  margin-bottom: 2vw;
}
</style>