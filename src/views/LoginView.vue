<template>
  <header>
    <NavbarComp />
  </header>
  <body>
    <SignupForm />
  </body>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: "Login",
  components: {
    NavbarComp,
    SignupForm,
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 450px;
  background-image: url("https://i.postimg.cc/NGn2ft7N/men-brand-list-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: grayscale(100%); */
}
</style>
