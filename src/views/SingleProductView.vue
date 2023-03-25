<template>
  <div class="Navbar">
    <NavbarComp />
  </div>
  <div class="holder">
  <div v-if="product" class="single-product">
    <div class="img">
      <img :src="product?.ProductImage" />
    </div>
    <div class="info">
      <h4>{{ product?.Designer }}</h4>
      <h3>{{ product?.ProductName }}</h3>
      <p class="price">R {{ product?.Price }}</p>
      <!-- <fieldset class="size">
        <legend>Size :</legend>
      </fieldset> -->
      <div class="quantity">
        <p>Quantity :</p>
        <div style="margin-left: 25px; border-bottom: 2px solid rgba(0, 0, 0, 0.7); width: 30px;">
          <input type="number" value="1" />
        </div>
      </div>
      <div class="buttons">
        <button class="add-to-cart">Add to Cart</button>
        <button class="wishlist"><i class="fa-solid fa-heart"></i></button>
      </div>
    </div>
  </div>
  <div v-else>
    <Spinner />
  </div>
  <div class="recommended">
    <div class="header">
      <div class="hr"></div>
      <h2>Recommended Fits</h2>
      <div class="hr"></div>
    </div>
    <div class="recommendations">
      <ProductsCard />
    </div>
  </div>
  </div>
</template>
<script>
import ProductsCard from "@/components/ProductsCard.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Spinner from "../components/Spinner.vue";
import NavbarComp from "@/components/NavbarComp.vue";
export default {
  name: "SingleProduct",
  components: {
    Spinner,
    ProductsCard,
    NavbarComp,
  },
  setup() {
    const store = useStore();
    let product = computed(() => store.state.product);
    return {
      product,
    };
  },
  mounted() {
    const store = useStore();
    store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>
<style scoped>
.Navbar {
  height: 500px;
  background-image: url("https://i.postimg.cc/4xm62szp/Moncler.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 15px;
}

.holder {
  height: 135vh;
  margin-bottom: 20px;
}

.single-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.img {
  width: 30%;
  height: 100%;
  border: 2px solid black;
}

img {
  width: 70%;
  height: 90%;
}

.info {
  padding-left: 10px;
  text-align: justify;
  width: 30%;
  height: 100%;
  /* position: relative; */
}

h4 {
  height: 35px;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: larger;
  padding-top: 5px;
  color: black;
}

h3 {
  height: 35px;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: x-large;
  color: black;
}

.price {
  height: 35px;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: 10px;
  padding-top: 15px;
  color: black;
}

/* .size {
  margin-top: 0px;
  display: flex;
  width: 150px;
  border: none;
  position: relative;
  padding-left: 0px;
  color: black;
} */

legend {
  padding: 0px;
  margin: 0px;
  color: black;
}

.X-Small {
  position: absolute;
  top: 25px;
  left: 38px;
  color: black;
}

.Small {
  position: absolute;
  top: 25px;
  left: 110px;
  color: black;
}

.Medium {
  position: absolute;
  top: 25px;
  left: 183px;
  color: black;
}

#S {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}

.quantity {
  margin-bottom: 20px;
}

.quantity button {
  width: 30px;
  height: 33px;
  border: none;
  border-bottom: 2px black;
  color: black;
}

.quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0%;
  padding: 0%;
  color: black;
}

.quantity input {
  width: 30px;
  height: 30px;
  text-align: center;
  border: none;
  border-bottom: 2px black;
}

.buttons {
  width: 400px;
  height: 50px;
  border: 1px black;
  display: flex;
}

.add-to-cart {
  flex: 80%;
  height: 100%;
  margin-right: 2px;
  color: black;
}

.wishlist {
  flex: 20%;
  height: 100%;
}

.header {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 10px;
  color: black;
}

.hr {
  border-top: 3px solid black;
  transform: rotateY(180deg);
  height: 4px;
  width: 20px;
  margin-top: 32px;
}

.recommendations {
  height: 250px;
}
</style>
