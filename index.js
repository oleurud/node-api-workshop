const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())


app.post('/test', function (req, res) {
    res.send(req.body)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})