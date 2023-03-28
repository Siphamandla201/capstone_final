import { createStore } from "vuex";
import axios from "axios";
const grey = "https://grey-foundation.onrender.com/";
import { useCookies } from "vue3-cookies";
// import router from "@/router";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    loggedInUser: false,
    token: null,
    msg: null,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, values) {
      state.user = values;
      localStorage.setItem("user", JSON.stringify(User));
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, values) {
      state.product = values;
    },
    setToken(state, value) {
      state.token = value;
    },
    setMessage(state, values) {
      state.msg = values;
    },

    deleteProduct(state, id) {
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
  actions: {
    async register(context, payload) {
      const res = await axios.post(`${grey}register`, payload);
      const { msg, err } = await res.data;
      if (err) {
        context.commit("setUsers", err);
      } else {
        context.commit("setUsers", msg);
        console.log("User has been registered");
      }
    },
    async login(context, payload) {
      try {
        const res = await axios.post(`${grey}login`, payload);
        const { result, jwToken, msg, err } = await res.data;
        if (result) {
          context.commit("setUser", result);
          context.commit("setToken", jwToken);
          localStorage.setItem("user", jwToken);
          localStorage.setItem("user", JSON.stringify(result));
          context.commit("setMessage", msg);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getUser(context, id) {
      const res = await axios.get(`${grey}users/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async getUsers(context) {
      const res = await axios.get(`${grey}users`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async getProducts(context) {
      const res = await axios.get(`${grey}products`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProducts", result);
      } else {
        context.commit("setMessage", err);
      }
    },

    async getProduct(context, id) {
      const res = await axios.get(`${grey}products/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setProduct", result[0]);
      } else {
        context.commit("setMessage", err);
      }
    },

    async onDeleteProduct({ commit, dispatch }, id) {
      try {
        await axios.delete(`${grey}products/${id}`);
        commit("deleteProduct");
        commit("setMessage", msg);
        dispatch("getProducts");
      } catch (err) {
        commit("setMessage", msg);
      }
    },

    async updateProduct(context, id) {
      try {
        const res = await axios.put(`${grey}products/${id}`);
        context.commit("updateProduct", id);
        context.commit("setMessage", msg);
      } catch (err) {
        context.commit("setMessage", err.msg);
      }
    },
  },

  modules: {},
});
