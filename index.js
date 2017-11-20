const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())


// custom auth middleware (not real ;))
app.use(function (req, res, next) {
    const token = req.get('Authorization')
    console.log(token)

    if (token === 'tokenmolon') {
        next()
    } else {
        next(new Error('Unauthorized'))
    }
})


// routes
app.post('/test', function (req, res) {
    res.send(req.body)
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})