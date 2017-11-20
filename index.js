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
app.post('/test', function(req, res, next){ console.log('route middlweare'); next()}, function (req, res) {
    res.send(req.body)
})

// route not found
app.use(function (req, res, next) {
    res.status(404).send("Route not found!")
})

// errors handler
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something was wrong!')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})