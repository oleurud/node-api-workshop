const express = require('express')
const parameters = require('./parameters')
const debug = require('debug')('app:index')
debug('init')

const app = express()

require('./src/app/middlewares')(app)
require('./src/app/routes')(app)
require('./src/app/errors')(app)

let port = parameters.port
if (process.env.MODE === 'test') {
    port = parameters.test.port
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app