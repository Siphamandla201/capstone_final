<template>
  <router-view :key="$route.fullPath" />

  <div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
