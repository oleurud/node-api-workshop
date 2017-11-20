const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/example', function (req, res) {
    res.send('GET request!')
})

app.post('/example', function (req, res) {
    res.send('POST request!')
})

app.put('/example', function (req, res) {
    res.send('PUT request!')
})

app.delete('/example', function (req, res) {
    res.send('DELETE request!')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})