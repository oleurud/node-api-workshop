const carsController = require('./controllers/cars')

module.exports = app => {
    // routes
    app.get('/cars', carsController.getAll)
    app.post('/cars', carsController.create)
}