<template>
  <div class="header-body">
    <header>
      <div class="header">
        <h2>
          <router-link to="/">Grey Foundation</router-link>
        </h2>
      </div>
      <div class="header-links">
        <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link>
        <router-link to="/Cart"
          ><i class="fa-solid fa-basket-shopping"></i
        ></router-link>
        <router-link to="/Cart"><i class="fa-solid fa-heart"></i></router-link>
      </div>
    </header>
    <div class="product-links">
      <ul class="product-list">
        <li><router-link to="/" class="product-categories">Home</router-link></li>
        <li><router-link to="/Products"  class="product-categories">Products</router-link></li>
        <li><router-link to="/About"  class="product-categories">About</router-link></li>
        <li><router-link to="/Admin"  class="product-categories">Admin</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-body {
  width: 90vh;
}

header {
  padding-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
}

.header {
  color: rgb(140, 149, 245);
  font-size: larger;
  font-weight: 800;
  cursor: none;
}

h2 a {
  text-decoration: none;
  color: rgb(140, 149, 245);
}

.header-links a {
  text-decoration: none;
  color: rgb(140, 149, 245);
  margin-left: 15px;
  cursor: pointer;
}

.header-links a:hover {
  color: rgba(240, 248, 255, 0.6);
}

nav {
  padding: 30px;
  margin-left: 50px;
}

nav a {
  margin-left: 10px;
  margin-top: 900px;
  font-weight: bold;
  color: rgb(2, 2, 2);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(140, 149, 245);
}

.navbar {
  padding-bottom: 150%;
  padding-right: 50%;
}

.product-links {
  margin: 80% ;
  margin-top: 100px;
  width: 450px;
}

.product-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

li {
  list-style: none;
}

.product-categories {
  text-decoration: none;
  color: rgb(140, 149, 245);
  cursor: pointer;
  font-size: 20px;
}

.product-categories:hover {
  opacity: 0.6;
}


@media screen and (max-width: 1463px) {
  .product-links {
    margin-left: 500px;
  }
}

@media screen and (max-width: 1364px) {
  .product-links {
    margin-left: 450px;
  }
}

@media screen and (max-width: 1240px) {
  .product-links {
    margin-left: 350px;
  }
}


@media screen and (max-width: 1100px) {
  .product-links {
    margin-left: 300px;
  }
}

@media screen and (max-width: 950px) {
  .product-links {
    margin-left: 250px;
  }
}

@media screen and (max-width: 900px) {

  header {
    margin-top: 10px;
  }

  h2 a {
    font-size: smaller;
  }

  .header-links {
    margin-right: 10px;
  }

  .header-links a {
    font-size: smaller;
  } 

  .product-links {
    margin-left: 150px;
  }

  .product-categories {
    font-size: 17px;
  }
}


@media screen and (max-width: 750px) {
  .product-links {
    margin-left: 120px;
  }
}

@media screen and (max-width: 700px) {
  .product-links {
    margin-left: 80px;
  }
}

@media screen and (max-width: 650px) {
  h2 a {
    font-size: 17px;
  }
  .product-links {
    margin: 20px 180px;
    justify-content: center;
    width: 200px;
  }

  .product-categories {
    font-size: small;
    margin-left: 30px;
  }

}

@media screen and (max-width: 600px) {
  .product-links {
    margin-left: 120px;
  }
}


@media screen and (max-width: 530px) {
  .product-links {
    margin-left: 100px;
  }
}

@media screen and (max-width: 500px) {
  .product-links {
    margin-left: 70px;
  }
}

@media screen and (max-width: 480px) {

  .product-links {
    width: 80%;
    padding: 20px;
    margin-left: 0px;
  }

  .product-list {
    width: 100%;
  }
  .product-categories {
    font-size: small;
    margin-right: auto;
  }

}

@media screen and (max-width: 420px) {
  .product-links {
    width: 60%;
    padding: 0px;
    margin-left: 20px;
  }

  .product-categories {
    font-size: small;
    margin-right: 0px;
    margin-left: 0px;
    width: 10px;
  }
}

@media screen and (max-width: 340px) {
  .product-links {
    margin-left: 0px;
  }

  .product-categories {
    font-size: x-small;
    margin-right: 5px;
  }
}

</style>
