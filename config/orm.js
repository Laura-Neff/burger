
// ORM is where you define a certain set of methods
// where you predefine your methods
// Defining an object
// skeleton
// handles database construction


var connection = require("./connection.js");

function generateParams(numOfParams) {
  var questionMarks = "";
  for (i = 0; i < numOfParams.length; i++){
    questionMarks += "?, ";
  }
  return questionMarks;

}



var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, tableInput, function(err, result) {
        if (err) throw err;
        cb(result);
        console.log(result);
      });
    },

    insertOne: function(tableInput, columns, values) {
        var queryString = "INSERT INTO " + tableInput + " (" + columns.toString() + ") " + "VALUES (" + generateParams(values.length) + ") ";

        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
          if (err) throw err;
          cb(result);
          console.log(result);
        });
      },

      updateOne: function(databaseName, tableInput, colName, value) {
        var queryString = "UPDATE ?.?? SET ?? = ?";
    
        connection.query(queryString,[databaseName, tableInput, colName, value], function(err, result) {
            if (err) throw err;
            console.log(result);
          }
    


        );
    }
  };
  
  module.exports = orm;

  