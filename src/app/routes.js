const carsController = require('./controllers/cars')

module.exports = function(app){
    // routes
    app.get('/cars', carsController.list)
}