
module.exports = app => {
    app.use((req, res, next) => {
        if(!res.locals.response) {
            res.status(404).send("Route not found!")
        } else {
            res.json({
                status: true,
                data: res.locals.response
            })
        }

    })
}
