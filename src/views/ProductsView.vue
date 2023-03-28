<template>
  <div class="Navbar">
    <NavbarComp />
  </div>
  <div class="page-title">
    <h4>Shop</h4>
    <div class="sort" style="border: 10px red; display: flex">
      <span>
        <h4>Sort</h4>
        <ul class="sort-list">
          <li class="sort-options">A-B</li>
          <li class="sort-options">1-2</li>
          <li class="sort-options">B-A</li>
          <li class="sort-options">2-1</li>
        </ul>
      </span>
    </div>
  </div>
  <body class="container m-5">
    <div class="filter container-fluid">
      <h4>Filter</h4>
        <select v-model="Category" class="container-fluid" >
          <option value="" selected>Categories</option>
          <option value="Sweatshirt">Sweatshirt</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Pants">Pants</option>
          <option value="Accessories">Accessories</option>
        </select>
    </div>
    <div class="Products container-fluid">
      <div class="products-holder">
        <div
          v-if="products !== undefined && products !== null && products !== []"
          v-for="product in products"
          :key="product.ProductId"
          class="products-card container-fluid"
        >
          <div class="product-img">
            <router-link
              :to="{ name: 'Product', params: { id: product.ProductId } }"
            >
              <img class="im image-fluid" :src="product.ProductImage" />
            </router-link>
          </div>
          <div class="product-info">
            <h3>{{ product.Designer }}</h3>
            <p>{{ product.ProductName }}</p>
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-right: 5px;
                margin: 5px;
                height: 20px;
              "
            >
              <h4>R {{ product.Price }}</h4>
              <router-link to="/Cart"
                ><i class="fa-solid fa-heart"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div
          v-else
          style="display: flex; justify-content: center; align-items: center"
        >
          <Spinner />
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Spinner from "@/components/Spinner.vue";
import NavbarComp from "../components/NavbarComp.vue";

export default {
  name: "Products",
  components: {
    Spinner,
    NavbarComp,
  },
  data() {
    return {
      Category: '',
      loggedInUser: false,
      
    }
  },
  setup() {
    const store = useStore();
    if (loggedInUser = true) {
    store.dispatch("getProducts");
    let products = computed(() => store.state.products);

    return {
      products,
    };
    } else{
      this.$route.push('/SignIn')
    }
  },
  methods: {
    filter() {
      if (this.Category === '') {
        return this.products
      } else {
        return this.products.filter(item => item.category === this.Category)
      }
    }
  }
};
</script>
<style scoped>
body {
  display: flex;
}

.Navbar {
  height: 500px;
  background-image: url("https://i.postimg.cc/9fm23zR3/hi.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

h4 {
  width: 150px;
  text-align: start;
}

.page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(140, 149, 245);
  min-height: 60px;
  height: auto;
}

.sort {
  width: 150px;
  text-align: center;
}

.sort-list {
  display: none;
  margin-top: 10px;
  padding-right: 20px;
  list-style: none;
}

.sort:hover .sort-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  color: antiquewhite;
}

.sort-options {
  border-bottom: 1.5px solid rgb(0, 0, 0);
  height: 25px;
  cursor: pointer;
  margin-right: 20px;
}

.filter {
  width: 25%;
}

.filter {
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 300px;
}

select {
  height: 60px;
  width: 350px;
  font-size: 20px;
  font-weight: 700;
}

.Products {
  width: 75%;
}

.products-holder {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px;
}

.products-card {
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
}

.product-img {
  overflow: hidden;
  height: 350px;
  width: 250px;
  padding: 10px;
}
img {
  width: 85%;
  height: 90%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  object-fit: cover;
  transition: all 1s;
  padding-left: 12px;
}

img:hover {
  scale: 1.2;
}

.product-info {
  margin-top: 5px;
  margin-left: 5px;
  border-top: 2px solid rgb(5, 5, 5);
  text-align: justify;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 0px;
  color: black;
}

h3 {
  margin: 5px;
  margin-left: 0px;
  margin-top: 10px;
  opacity: 0.8;
}

p {
  margin: 5px;
}

h4 {
  margin: 0px;
}

i {
  color: rgb(140, 149, 245);
  font-size: 20px;
}
</style>
