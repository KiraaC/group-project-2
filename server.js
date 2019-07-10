// Dependencies
const express = require("express");
const path = require("path");
const mysql = require('mysql');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT ||9040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.static('app/public'));

require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

require(path.join(__dirname, "./assets/mysql/cosplaydb"))(app);
require(path.join(__dirname, "./assets/mysql/cosplay_people"))(app);

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Siryessir!1',
  database: 'cosplaydb'
})
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
connection.query('SELECT * FROM contacts', function(err, results) {
  if (err) throw err
  // console.log(results[0].first_name)
  // console.log(results[0].last_name)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  