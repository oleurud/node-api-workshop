const carsController = require('./controllers/cars')
const authMiddleware = require('./middlewares/auth')

module.exports = app => {
    // routes
    app.get('/cars', carsController.getAll)
    app.post('/cars', authMiddleware, carsController.create)
}