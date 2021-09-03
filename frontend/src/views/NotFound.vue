<template>
  <section class="notFound">
    <h2>404- Page Not Found</h2>
    <button class="button">Volver</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import "../styles/_colors.scss";
@import "../styles/_mixins.scss";

.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem;
}

.button {
  @include button;
}
</style>