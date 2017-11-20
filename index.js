const express = require('express')

const app = express()

require('./src/app/middlewares')(app)
require('./src/app/routes')(app)
require('./src/app/errors')(app)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
