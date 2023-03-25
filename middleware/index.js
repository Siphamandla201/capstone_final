// Importing Authentication Middleware
require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
// Creating a token
function createToken(user) {
  return sign(
    {
      Email: user.Email,
      Password: user.Password,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}

function verifyAToken(req, res, next) {
  try {
    const token =
      req.cookies["VerifiedUser"] !== null
        ? req.cookies["VerifiedUser"]
        : "Please register";
    const isValid = null;
    if (token !== "Please register") {
      isValid = verify(token, process.env.SECRET_KEY);
      if (isValid) {
        req.authenticated = true;
        next();
      } else {
        res.status(400).json({ err: "Please register" });
      }
    } else {
      res.status(400).json({ err: "Please register" });
    }
  } catch (e) {
    res.status(400).json({ err: e.msg });
  }
}

module.exports = { createToken, verifyAToken };
