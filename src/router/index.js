import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Products",
    name: "Products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/Product/:id",
    name: "Product",
    component: () => import("../views/SingleProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
