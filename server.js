// Dependencies
const express = require("express");
const path = require("path");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 9040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('app/public'));

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'cosplaydb'
})

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
  }
  console.log('You are now connected...' + connection.threadId)
})

require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

