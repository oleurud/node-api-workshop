const carsManager = require('../../common/managers/cars')

module.exports = {
    async getAll (req, res) {
        const cars = await carsManager.getAll()
        res.json(cars)
    },

    async create (req, res) {
        const { model, engine, color } = req.body

        // validation

        const car = await carsManager.create(model, engine, color)
        res.json(car)
    }
}