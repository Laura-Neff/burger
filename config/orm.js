
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

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}



var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, tableInput, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },

    insertOne: function(tableInput, columns, values, cb) {
        var queryString = "INSERT INTO " + tableInput + " (" + columns.toString() + ") " + "VALUES (" + generateParams(values.length) + ") ";

        console.log(queryString);
        connection.query(queryString, values, function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        });
      },

    //   updateOne: function(databaseName, tableInput, colName, value, cb) {
    //     var queryString = "UPDATE ?.?? SET ?? = ?";
    
    //     connection.query(queryString,[databaseName, tableInput, colName, value], function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //         cb(result);
            
    //       }
    


    //     );
    // }

    updateOne: function(tableInput, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  

  
  
  module.exports = orm;

  