<template>
  <div class="resources">
    <h2>Recursos</h2>
    <section class="resources__items">
      <ul class="items__book">
        <li
          v-for="resource in resources"
          :key="resource._id"
          class="book__item"
        >
          <div class="book__itemContainer">
            <div Class="book__image">
              <img :src="resource.image" alt="Portada Libro" />
            </div>
            <div class="book__info">
              <h3>{{ resource.title }}</h3>
              <h4>{{ resource.author }}</h4>
              <a :href="resource.siteEditorial" target="_blank">{{
                resource.editorial
              }}</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Resources",
  props: {
    title: String,
    author: String,
    editorial: String,
    siteEditorial: String,
    image: String,
  },
  computed: {
    ...mapState(["resources", "token"]),
  },
  methods: {
    ...mapActions(["fetchResourcesFromApi"]),
  },
  mounted() {
    this.fetchResourcesFromApi(this.token);
  },
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
.resources__items {
  min-width: 500px;
}
.items__book {
  height: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 45vw;
  background-color: rgba(10, 76, 99, 0.7);
  margin: 2vw;
  border-radius: 1.5vw;
  & img {
    width: 70%;
    background-color: $regLogBlue;
    border-radius: 1vw;
  }
}
.book__itemContainer {
  background-color: $aqua;
  border-radius: 1.5vw;
  display: flex;
  flex-direction: row;
  margin: 2vw;
}
.book__image {
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.book__info {
  flex: 1;
  display: flex;
  text-align: center;
  margin: 2vw;
  flex-direction: column;
  justify-content: center;

  width: 60%;
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