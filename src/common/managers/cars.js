const Car = require('../models/Car')

module.exports = {
    async create(model, engine, color) {
        let car = new Car({
            model,
            engine,
            color
        })


        await car.save()
        return car.getPublicInfo()
    },

    async getAll() {
        const cars = await Car.findAll()
        return cars.map( car => car.getPublicInfo() )
    }
}