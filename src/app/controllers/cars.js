const carsManager = require('../../common/managers/cars')

module.exports = {
    async getAll (req, res, next) {
        const cars = await carsManager.getAll()
        res.locals.response = cars
        next()
    },

    async create (req, res, next) {
        const { model, engine, color } = req.body

        // validation

        const car = await carsManager.create(model, engine, color)
        res.locals.response = car
        next()
    }
}