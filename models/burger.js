var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(tableInput, id, burgerName, devoured, cb) {
      orm.create("burgers", id, burgerName, devoured, cb, function(res) {
        cb(res);
      });
    },
    updateOne: function(databaseName, tableInput, colName, value, cb) {
      orm.update(databaseName, tableInput, colName, value, cb, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;