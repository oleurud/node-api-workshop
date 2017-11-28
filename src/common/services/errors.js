const CustomError = require('./CustomError')

module.exports = {
    NotFound(message = 'Not found', status = 404) {
        return new CustomError(message, status)
    }
} 
