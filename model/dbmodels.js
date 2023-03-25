const database = require("../config/config");
const bcrypt = require("bcrypt");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/index");
class Users {

    async createUser(req, res) {
      let input = req.body;
      let data = input.password;
  
      let salt = await bcrypt.genSalt(13);
      let password = await bcrypt.hash(data, salt);
  
      let User = {
        email: input.email,
        password: password,
      };
  
      database.query(`INSERT INTO Users SET ?`, [User], (err) => {
        if (err) {
          res.status(400).json({ err });
        } else {
          const jwToken = createToken(User);
  
          res.cookie("VerifiedUser", jwToken, {
            maxAge: 3600000,
            httpOnly: true,
          });
          res.status(200).json({ msg: "User info submitted." });
        }
      });
    }

  login(req, res) {
    let { email, password } = req.body;
    let qry = `SELECT * FROM Users  
    WHERE email = '${email}'`;
    database.query(qry, async (err, data) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        await compare(password, data[0].password, (err, Result) => {
          if (err) throw err;
          const jwToken = createToken({
            email,
            password,
          });
          res.cookie("VerifiedUser", jwToken, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (Result) {
            res.status(200).json({
              msg: "welcome back"[data.UsersId],
              jwToken,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "incorrect Password, please sign up ? ",
            });
          }
        });
      }
    });
  }

  showUser(req, res) {
    database.query(
      `SELECT * FROM Users  
      WHERE UsersId = ?;`,
      [req.params.usersId],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ result: data });
      }
    );
  }

  showAllUsers(req, res) {
    database.query(`SELECT * FROM Users `, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else res.status(200).send({ result });
    });
  }

  updateUser(req, res) {
    let reqUserId = req.params.UsersId;
    let data = req.body;
    if (data.Password !== null || data.Password !== undefined)
      data.Password = hashSync(data.Password, 15);
    database.query(
      `Update Users SET ?
        WHERE UsersId = ?;`,
      [
        data.UsersId,
        data.name,
        data.surname,
        data.cellphone,
        data.email,
        data.password,
        data.address,
        data.gender,
        reqUserId,
      ],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({ msg: "User updated successfully" });
        }
      }
    );
  }

  deleteUser(req, res) {
    database.query(
      `DELETE FROM Users 
      WHERE UsersId = ? ;`,
      [req.params.UsersId],
      (err) => {
        if (err) throw err;
        else res.status(200).json({ msg: "Deleted successfully" });
      }
    );
  }
}

class Products {
  createProduct(req, res) {
    let input = req.body;
    database.query(`INSERT INTO Products SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ msg: "Product added" });
      }
    });
  }

  updateProduct(req, res) {
    let reqProduct = req.params.ProductId;
    database.query(
      `Update Products SET ProductId = ?, ProductName = ?,ProductImage = ?, Price = ?, Size = ?, Quantity = ? 
        WHERE ProductId = ?`,
      [
        req.body.ProductId,
        req.body.ProductName,
        req.body.ProductImage,
        req.body.Price,
        req.body.Size,
        req.body.Quantity,
        reqProduct,
      ],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({ msg: "Product updated successfully" });
          // res.json({result});
        }
      }
    );
  }

  deleteProduct(req, res) {
    let reqProduct = req.params.ProductId;
    database.query(
      `DELETE FROM Products 
      WHERE ProductId = ? ;`,
      [reqProduct],
      (err) => {
        if (err) throw err;
        else res.status(200).json({ msg: "Deleted successfully" });
      }
    );
  }

  showProduct(req, res) {
    database.query(
      `SELECT * FROM Products  
      WHERE ProductId = ?;`,
      [req.params.ProductId],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ result: data });
      }
    );
  }

  showAllProducts(req, res) {
    database.query(`SELECT * FROM Products `, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else res.status(200).send({ result });
    });
  }
}

class Orders {
  addTo(req, res) {
    let input = req.body;
    database.query(`INSERT INTO Orders SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err: "please login to add product" });
      } else {
        res.status(200).json({ msg: "Product added" });
      }
    });
  }

  OrdersDisplay(req, res) {
    database.query(`SELECT * FROM Orders`, (err, data) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ result: data });
      }
    });
  }

  deleteOrder(req, res) {
    let reqOrder = req.params.OrderId;
    database.query(
      `DELETE FROM Orders 
      WHERE OrderId = ? ;`,
      [reqOrder],
      (err) => {
        if (err) throw err;
        else res.status(200).json({ msg: "Deleted successfully" });
      }
    );
  }

  updateOrder(req, res) {
    let reqOrder = req.params.OrderId;
    database.query(
      `UPDATE Orders SET ? WHERE OrderId = ?`,
      [req.body, reqOrder],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          res.status(200).json({ msg: "Order updated successfully", result });
        }
      }
    );
  }
  Th
  

} 



module.exports = { Users, Products, Orders };
