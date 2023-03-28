const mysql = require("mysql");
require("dotenv").config();

let connections = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DBNAME,
  user: process.env.USER,
  password: process.env.DBPASS,
  Port: process.env.DBPORT,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connections;
