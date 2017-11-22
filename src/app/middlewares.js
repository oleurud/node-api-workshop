const bodyParser = require('body-parser')

module.exports = function(app){
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json 
    app.use(bodyParser.json())


    // custom auth middleware (not real ;))
    app.use(function (req, res, next) {
        const token = req.get('Authorization')

        if (token === 'tokenmolon') {
            next()
        } else {
            next(new Error('Unauthorized'))
        }
    })
}