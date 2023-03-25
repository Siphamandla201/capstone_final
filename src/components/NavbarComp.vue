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
</style>
