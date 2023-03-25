<template>
  <div class="admin-tables container">
    <h3>Products</h3>
    <div class="Products-table container-fluid ">
      <table class="table table-sm-striped  table-hover">
        <thead class="table-dark">
          <tr>
            <th>ProductId</th>
            <th>ProductImage</th>
            <th>ProductName</th>
            <th>Price</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>DayArrived</th>
            <th>Gender</th>
            <th>Designer</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.productId">
            <td>{{ product.ProductId }}</td>
            <td><img :src="product.ProductImage" /></td>
            <td>{{ product.productName }}</td>
            <td>R {{ product.Price }}</td>
            <td>{{ product.Size }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.DayArrived }}</td>
            <td>{{ product.Gender }}</td>
            <td>{{ product.Designer }}</td>
            <td>{{ product.Category }}</td>
            <td><button  @click="onDeleteProduct(product.ProductId)"  class=" bg-danger">Delete</button></td>
            <td><button class=" bg-success" @click="showModal = false">Update</button></td>
          </tr>
        </tbody>
        <div class="modal" v-show="isOpen">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Update Product</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="product-name" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="product-name">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input type="number" class="form-control" id="price" >
            </div>
            <div class="mb-3">
              <label for="size" class="form-label">Size</label>
              <input type="text" class="form-control" id="size" >
            </div>
            <div class="mb-3">
              <label for="quantity" class="form-label">Quantity</label>
              <input type="number" class="form-control" id="quantity">
            </div>
            <div class="mb-3">
              <label for="day-arrived" class="form-label">Day Arrived</label>
              <input type="text" class="form-control" id="day-arrived">
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender</label>
              <input type="text" class="form-control" id="gender">
            </div>
            <div class="mb-3">
              <label for="designer" class="form-label">Designer</label>
              <input type="text" class="form-control" id="designer" >
            </div>
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" class="form-control" id="category" >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
        </div>
      </div>
    </div>
  </div>
      </table>
    </div>
    <h3>Users</h3>
    <div class="Users-table container-fluid">
      <table class="table table-sm-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">User</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Cellphone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.username">
            <td>{{ user.UsersId }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.cellphone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.role }}</td>
            <td><button class=" bg-danger">Delete</button></td>
            <td><button class=" bg-success">Update</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import store from "@/store";
export default {
  name: "AdminTable",
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    store.dispatch("getUsers");
    let products = computed(() => store.state.products);
    let users = computed(() => store.state.users);
    return {
      products,
      users,
    };
  },

  data: {
  products: [],
  showModal: false
  }, 

  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    selectedProduct: {
      type: Object,
      default: null
    }
  },

  methods : {
    async onDeleteProduct(id) {
    try {
      this.$store.dispatch("onDeleteProduct", id);
    } catch (err) {
      commit("setMessage", err.msg);
      alert(err.msg)
    }
  },

  onDelete () {
    this.showModal = true;
  },
    
  closeModal() {
      this.$emit('close');
    },
},

};
</script>
<style scoped>
.admin-tables {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 9rem;
  height: 9rem;
  transition: all 2s;
}

h3 {
  text-align: start !important;
}

hr {
  width: 600px;
}

td {
  /* padding: 20px; */
  word-break: break-all;
}

</style>
