const carsController = require('./controllers/cars')

module.exports = app => {
    // routes
    app.get('/cars', carsController.list)
}