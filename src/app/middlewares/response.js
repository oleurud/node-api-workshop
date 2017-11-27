
module.exports = app => {
    app.use((req, res, next) => {
        if(!res.locals.response) {
            res.status(404).send("Route not found!")
        }

        res.json({
            status: true,
            data: res.locals.response
        })
    })
}