<template>
  <div class="Home">
    <div class="video-container">
      <video autoplay loop muted playsinline class="Video">
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
      <div class="navbar-container">
        <NavbarComp />
      </div>
    </div>
  </div>
  <body>
    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

    <h2 class="featured">Shop</h2>
    <div class="product-holder">
      <div>
        <ProductsCard />
      </div>
      <div class="arrow">
        <router-link to="/Products" >
         <i class="fa-regular fa-greater-than"></i>
        </router-link>
      </div>
    </div>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

    <section>
      <div class="banner-full">
        <img
          src="https://i.postimg.cc/tgFsPpJp/64c2ed3104304ae4824b414fbc35672e.jpg"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Introducing Our New Arrivals</h3>
          <p>Check out the latest styles from us.</p>
          <router-link to="/Products" class="banner-btn">SHOP NOW</router-link> 
        </div>
      </div>
    </section>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| PRODUCTS |||||||||||||||||||||||||||||||||||||||||||||| */ -->

    <h2 class="featured">New Arrivals</h2>
    <div class="product-holder">
      <div>
        <ProductsCard />
      </div>
      <div class="arrow">
        <router-link to="/Products">
        <i class="fa-regular fa-greater-than"></i>
        </router-link>
      </div>
    </div>

    <!-- /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */ -->

    <section>
      <div class="banner-full">
        <img
          class="img"
          src="https://i.postimg.cc/SKLQWWWM/Fashion-Banner-Landscape.jpg"
          alt="banner"
        />
        <div class="banner-description">
          <h3>Collections and Styles</h3>
          <p>Find your true style with our extensive range of collections.</p>
          <router-link to="Products" style="color: antiquewhite;">SHOP NOW</router-link>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "../components/NavbarComp.vue";
import ProductsCard from "@/components/ProductsCard.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    ProductsCard,
  },
};
</script>

<style scoped>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

body {
  position: relative;
}

h2 {
  text-align: start;
  font-weight: bolder;
  font-size: larger;
}

html {
  padding: 0;
  margin: 0;
}

.video-container {
  width: 98vw;
  height: 550px;
  position: relative;
  overflow: hidden;
}
.navbar-container {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 1;
}

.Video {
  object-fit: contain;
  width: 100%;
  background-image: linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255));
}

.featured {
  margin-left: 30px;
  padding-top: 20px;
  font-size: larger;
  font-weight: 600;
}

.product-holder {
  position: relative;
  left: 150px;
  border: 2px solid rgba(35, 33, 33, 0.1);
  width: 80%;
  margin: 20px;
  margin-bottom: 60px;
}

.arrow {
  position: absolute;
  top: 215px;
  right: -27px;
  border: 2px solid rgba(35, 33, 33, 0.1);
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: white;
}

.arrow i {
  font-size: 25px;
  margin-top: 10px;
  cursor: pointer;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */

.banner-full {
  object-fit: contain;
  height: 500px;
  margin-bottom: 10px;
  position: relative;
}

.banner-full img {
  height: 100%;
  width: 100%;
  filter: grayscale(80%);
  position: relative;
}

.banner-full .img {
  filter: brightness(0.5);
  filter: grayscale(100%);
}

.banner-description {
  position: absolute;
  height: 100px;
  color: black;
  text-align: justify;
  z-index: 1;
  top: 150px;
  left: 0;
  padding: 20px;
}

.banner-description h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.banner-description p {
  color: rgb(255, 255, 255);
  margin-top: 15px;
  font-size: 1.25rem;
  margin-bottom: 10px;
  word-wrap: normal;
  word-spacing: 1.5px;
}

.banner-btn {
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  transition: background-color 0.2s ease;
}

@keyframes grow {
  0% {
    scale: 0.8;
  }

  100% {
    scale: 1.1;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 1250px) {

  .product-holder {

  }

  .arrow {
  display: none;
}
}

@media screen and (max-width: 800px) {
  .video-container {
    height: 80vh;
  }

  .Video {
    object-fit: cover;
  }

  .navbar-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .product-holder {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .arrow {
    display: none;
  }



  .banner-description h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .banner-description p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
}

</style>
