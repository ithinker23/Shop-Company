const mysql = require('mysql');

const DBConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop app"
});

DBConnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = DBConnection;