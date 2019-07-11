
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    insertOne: function(tableInput, id, burgerName, devoured) {
        var queryString = "INSERT INTO ?? (??, ??, ??)";
        console.log(queryString);
        connection.query(queryString, [tableInput, id, burgerName, devoured], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },

      updateOne: function(databaseName, tableInput, colName, value) {
        var queryString = "UPDATE ?.?? SET ?? = ?";
    
        connection.query(
          queryString,
          [databaseName,tableInput,colName,value],
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
    


        );
    }
  };
  
  module.exports = orm;

  