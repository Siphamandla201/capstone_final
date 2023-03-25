<template>
  <div class="filter">
    <h2>Filter</h2>
    <select v-model="Category" >
      <option value="" selected>Categories</option>
      <option value="Sweatshirt">Sweatshirt</option>
      <!-- <option value="5000 - more">T-Shirt</option>
      <option value="0-500">Pants</option>
      <option value="500-1500">Bags</option>
      <option value="1500-5000">Accessories</option> -->
    </select>
    <select>
      <option value="all">Price</option>
      <option value="0-500">0 - 500</option>
      <option value="500-1500">500 - 1500</option>
      <option value="1500-5000">1500 - 5000</option>
      <option value="5000 - more">5000+</option>
    </select>
    <!-- <select>
      <option value="all">Designers</option>
      <option value="Fendi">Fendi</option>
      <option value="Cucci">Gucci</option>
      <option value="Versace">Versace</option>
    </select> -->
  </div>
</template>
<script>
export default {
  name: "FilterComp",
  data() {
    return {
      Category: ''
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
}
</script>
<style scoped>
h2 {
  text-align: start;
}
.filter {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 300px;
}

select {
  height: 60px;
  width: 350px;
  font-size: 20px;
  font-weight: 700;
}

option {
  position: absolute;
  border-radius: 0%;
}

/* h4 {
  width: 150px;
}

.sort {
  width: 150px;
  text-align: center;
   margin-right: 50px; 
}

.sort-list {
  display: none;
  margin-top: 50px;
  margin-right: 50px;
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
} */
</style>
