const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json 
app.use(bodyParser.json())


// custom auth middleware (not real ;))
app.use((req, res, next) => {
    const token = req.get('Authorization')
    console.log(token)

    if (token === 'tokenmolon') {
        next()
    } else {
        next(new Error('Unauthorized'))
    }
})


// routes
app.post('/test', (req, res) => {
    res.send(req.body)
})

// route not found
app.use((req, res, next) => {
    res.status(404).send("Route not found!")
})

// errors handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something was wrong!')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))