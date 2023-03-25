const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const { Users, Products, Orders } = require("../model/dbmodels");

// |||||||||||||||||||||||||||||| -USERS ROUTER- |||||||||||||||||||||||||||||||||| \\

const user = new Users();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

router.post("/register", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

router.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

router.get("/users/:usersId", (req, res) => {
  console.log(req.params.usersId);
  user.showUser(req, res);
});

router.get("/users", (req, res) => {
  user.showAllUsers(req, res);
});

router.delete("/users/:UsersId", (req, res) => {
  user.deleteUser(req, res);
});

router.put("/users/:UsersId", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

// |||||||||||||||||||||||||||||| -PRODUCTS ROUTER- |||||||||||||||||||||||||||||||||| \\

const product = new Products();

router.post("/products", bodyParser.json(), (req, res) => {
  product.createProduct(req, res);
});

router.get("/products/:ProductId", (req, res) => {
  console.log("Hi");
  product.showProduct(req, res);
});

router.get("/products", (req, res) => {
  product.showAllProducts(req, res);
});

router.delete("/products/:ProductId", (req, res) => {
  product.deleteProduct(req, res);
});

router.put("/products/:productId", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});

const orders = new Orders();

router.get("/orders", (req, res) => {
  orders.OrdersDisplay(req, res);
});

router.post("/orders", (req, res) => {
  orders.addTo(req, res);
});

router.delete("/orders/:OrderId", (req, res) => {
  orders.deleteOrder(req, res);
});

router.put("/orders/:OrderId", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
});

module.exports = router;
