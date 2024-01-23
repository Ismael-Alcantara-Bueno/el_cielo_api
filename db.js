const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "ismaalfa",
  database: "el_cielo_oficial2",
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
