const CustomError = require('./CustomError')

module.exports = {
    NotFound(message = 'Not found', status = 404) {
        return new CustomError(message, status)
    },

    Error500(message = 'Something was wrong', status = 500) {
        return new CustomError(message, status)
    },
}