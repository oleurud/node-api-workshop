
module.exports = app => {
    app.use((req, res, next) => {
        res.json({
            status: true,
            data: res.locals.response
        })
    })
}