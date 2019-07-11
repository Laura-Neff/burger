
var express = require("express");

var handlebars = require("express-handlebars");

var mysql = require("mysql");

// initialize instance of express
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start our server so that it can begin listening to client requests.
// Listeners must be registered with the source object first
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

