const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())


app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))