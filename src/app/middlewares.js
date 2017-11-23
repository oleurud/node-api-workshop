const bodyParser = require('body-parser')

module.exports = app => {
    
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json 
    app.use(bodyParser.json())


    // custom auth middleware (not real ;))
    app.use((req, res, next) => {
        const token = req.get('Authorization')
        console.log(token)

        if (token === 'tokenmolon') {
            next()
        } else {
            next(new Error('Unauthorized'))
        }
    })
}