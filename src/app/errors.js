
module.exports = function(app){
    // route not found
    app.use(function (req, res, next) {
        res.status(404).send("Route not found!")
    })

    // errors handler
    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something was wrong!')
    })
}