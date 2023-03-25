<template>
  <div class="Navbar">
    <NavbarComp />
  </div>
  <div>
    <SignupForm></SignupForm>
  </div>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import SignupForm from "@/components/SignupForm.vue";
export default {
  components : {
    NavbarComp,
    SignupForm
  }
}
</script>
<style scoped>

.Navbar {
  height: 400px;
  background-image: url("https://i.postimg.cc/9fm23zR3/hi.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
  
</style>