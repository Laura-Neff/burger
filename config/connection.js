
var mysql = require("mysql");

require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.MySQL_Host,
  user: process.env.MySQL_User,
  port: process.env.MySQL_Port,
  password: process.env.MySQL_Password,
  database: process.env.MySQL_Database
});


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
  