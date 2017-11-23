const express = require('express')
const app = express()

// responses: more in https://expressjs.com/en/guide/routing.html
app.get('/json', (req, res) => {
    const example = {
        name: 'Pepe'
    }

    res.json(example)
})

app.get('/error', (req, res) => {
    res.status(403).send('Something was wrong!')
})

// requests params
app.get('/test', (req, res) => {
    res.send(req.query)
})

app.post('/test', (req, res) => {
    // ups! use body-parser!!
    res.send(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))