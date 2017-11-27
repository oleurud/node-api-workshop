const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
// const authMiddleware = require('./middlewares/auth')

module.exports = app => {
    // Disable express headers
    app.set('x-powered-by', false)
    app.set('etag', false)

    // cors
    app.use(cors())
    
    // Helmet security enabled
    app.use(helmet())

    // Simple request logger
    if (process.env.MODE === 'test' || process.env.MODE === 'dev')
        app.use(morgan('dev'))

    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: true }))
    // parse application/json 
    app.use(bodyParser.json())

    // custom auth middleware (not real ;))
    // app.use(authMiddleware)
}