
module.exports = {
    list: function (req, res) {
        const cars = {
            Lotus: ['Evora', 'Elise'],
            Maserati: ['Ghibli', 'Levante'],
            Tesla: []
        }

        res.send(cars)
    }
}