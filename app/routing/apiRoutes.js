const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Siryessir!1',
    database: 'cosplaydb'
})

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')
})

app.get("api/control", function (req, res) {

    res.json(data)

});