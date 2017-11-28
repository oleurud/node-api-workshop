const errors = require('../../common/services/errors')

module.exports = app => {
    app.use((req, res, next) => {
        if(!res.locals.response) {
            next(errors.NotFound())
        }

        res.json({
            status: true,
            data: res.locals.response
        })
    })
}