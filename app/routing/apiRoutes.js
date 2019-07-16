const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'cosplaydb'
  })
  
  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
    }
    console.log('You are now connected...' + connection.threadId)
  })

module.exports = function (app) {
    // add new contact
    app.post("/api/contacts", function (req, res) {
        console.log(req.body)
        connection.query("INSERT INTO contacts (first_name, last_name, email_address, phone_number, character_name, message) VALUES (?,?,?,?,?,?)" , [req.body.FName, req.body.LName, req.body.Email, req.body.PhoneNumber, req.body.Character, req.body.Message], err => {
            if (err) throw err
            console.log('contact was added')
        })
    })

    // view new contact
    app.get("/api/contacts", function (req, res) {
        connection.query("SELECT * FROM contacts", (err, data) => {
            if(err) throw err
            console.log(data)
            res.send(data)
        })
    })

    // update new contact
    app.put("/api/contacts", function (req, res) {
        console.log(req.body)
    })
};