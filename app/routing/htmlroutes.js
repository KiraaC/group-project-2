const path = require("path");

module.exports = function (app) {

  // Routes
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/home.html"));
  });

  app.get("/control", function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/control.html"));
  });

  // placeholder
  app.get("/control", function (req, res) {
    res.sendFile(path.join(__dirname, "./.././assets/mysql/cosplaydb"));
  });

  app.get("/control", function (req, res) {
    res.sendFile(path.join(__dirname, "./.././assets/mysql/cosplaydb"));
  });

  app.get("/contacts", function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/contacts.html"));
  });

};