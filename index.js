const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/example', (req, res) => {
    res.send('GET request!')
})

app.post('/example', (req, res) => {
    res.send('POST request!')
})

app.put('/example', (req, res) => {
    res.send('PUT request!')
})

app.delete('/example', (req, res) => {
    res.send('DELETE request!')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))