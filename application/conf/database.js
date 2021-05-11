const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "csc317db",
  //   connectionLimit: 50,
  debug: true,
});

const promisePool = pool.promise();

module.exports = promisePool;
