const bodyParser = require('body-parser')
const redisClient = require('../common/services/redis').getClient()

module.exports = app => {
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json 
    app.use(bodyParser.json())


    // custom auth middleware (not real ;))
    app.use( async function(req, res, next) {
        const requestToken = req.get('Authorization')
        const validToken = await redisClient.getAsync('token')

        if (requestToken === validToken) {
            next()
        } else {
            next(new Error('Unauthorized'))
        }
    })
}