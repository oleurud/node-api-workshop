
module.exports = app => {
    // route not found
    app.use((req, res, next) => {
        res.status(404).send("Route not found!")
    })

    // errors handler
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something was wrong!')
    })
}