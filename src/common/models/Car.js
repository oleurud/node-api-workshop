
const mongoose = require('mongoose')
const debug = require('debug')('app:Car')

const engineSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: [
            'Petrol',
            'Diesel'
        ],
        default: 'Petrol',        
        required: true
    },
    horsepower: {
        type: Number,
        required: false
    }
}, { _id: false })


const carSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: true
        },
        engine: {
            type: engineSchema,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


carSchema.methods = {
    getPublicInfo() {
        return {
            model: this.model,
            color: this.color,
            engine: this.engine
        }
    }
}

carSchema.statics = {
    findAll() {
        return this.find({})
    }
}

module.exports = mongoose.model('Car', carSchema, 'car')
