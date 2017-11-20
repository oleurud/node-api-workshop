const express = require('express')
const app = express()

// responses: more in https://expressjs.com/en/guide/routing.html
app.get('/json', function (req, res) {
    const example = {
        name: 'Pepe'
    }

    res.json(example)
})

app.get('/error', function (req, res) {
    res.status(403).send('Something was wrong!')
})

// requests params
app.get('/test', function (req, res) {
    res.send(req.query)
})

app.post('/test', function (req, res) {
    // ups! use body-parser!!
    res.send(req.body)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})