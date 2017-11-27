'use strict'

const Car = require('../src/common/models/Car')
const debug = require('debug')('app:test:helper')

module.exports = {
    async cleanDb(){
        debug('cleaning DB...')
        return await Car.remove({})
    }
}