const mongoose = require('mongoose')
mongoose.Promise = Promise
const debug      = require('debug')('app: mongoose')
const parameters = require('../../../parameters')


let client

/**
 * Used to track mongoose connection status
 * @type {Boolean}
 */
exports.connected = false;

/**
 * Get mongoose client
 * @return {MongoClient}
 */
exports.getClient = function(){
    return client
}

exports.startClient = function(){

    var eventNames = ['connecting', 'connected', 'open', 'disconnecting', 'disconnected', 'close', 'reconnected', 'error', 'fullsetup', 'all']
    mongoose.connection
        .on('open',()=>{
            this.connected = true
        })
        .on('disconnected',()=>{
            this.connected = false
            setTimeout(connect,4000)
        })

    eventNames.forEach(function(eventName){
        mongoose.connection.on(eventName,function(e){
            if (e)
                debug(eventName,e,mongoose.connection.readyState)
            else
                debug(eventName,mongoose.connection.readyState)
        })
    })
    
    connect()
}

function connect(){
    let mongodbConnectionUri = parameters.mongodbConnectionUri
    if (process.env.MODE === 'test') {
        mongodbConnectionUri = parameters.test.mongodbConnectionUri
    }

    mongoose.connect(
        mongodbConnectionUri,
        {
            useMongoClient: true,
            keepAlive: true,
            reconnectTries: Number.MAX_SAFE_INTEGER
        }
    )
}