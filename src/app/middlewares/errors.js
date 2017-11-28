const CustomError = require('../../common/services/CustomError')
const errors = require('../../common/services/errors')
const debug = require('debug')('app:errors')

module.exports = app => {
    app.use((err, req, res, next) => {
        if (!(err instanceof CustomError)) {
            debug(err)
            err = errors.Error500()
        }

        res.status(err.status).json({
            status: false,
            error: err.message
        })
    })
}
