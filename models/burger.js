
// your model is your instance of your orm object
// where you give the functions from your orm parameters

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableInput, cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
        // cb = callback
        // user provides the function for callback
        // response comes, and links with callback provided
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(tableInput, columns, values, cb) {
      orm.insertOne("burgers", ["burger_name"], values, function(res) {
        cb(res);
      });
    },
    updateOne: function(databaseName, tableInput, colName, value, cb) {
      orm.updateOne(`burgers_db`, `burgers`, colName, value, cb, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;