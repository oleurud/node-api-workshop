const redisClient = require('../../common/services/redis').getClient()
const errors = require('../../common/services/errors')

module.exports = async function authMiddleware (req, res, next) {
    const validToken = await redisClient.getAsync('token')
    const requestToken = req.get('Authorization')

    if (requestToken === validToken) {
        next()
    } else {
        next(errors.Unauthorized())
    }
}
