// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT ||9040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });