module.exports = function (app) {
    app.post("/api/contacts", function (req, res) {
        console.log(req.body.FName)
    })
};