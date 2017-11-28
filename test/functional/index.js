'use strict';

const app = require('../../index')
const expect = require('chai').expect
const request = require('supertest').agent(app)
const errors = require('../../src/common/services/errors')
const debug = require('debug')('app:test:functional:index')

const car = {
	model: 'Elise',
	color: 'red',
	engine: {
		type: 'Petrol',
		horsepower: 200
	}
}

describe('FUNCTIONAL API - INDEX', function(){
    it('should create a car', function(done){
        request
            .post('/cars')
            .set('Authorization', 'tokenmolon')
            .send(car)
            .expect(200)
            .end(function(err,res){
                expect(err).to.be.null
                expect(res.body).to.deep.equal({
                    status: true,
                    data: car
                })
                done()
            })
    })

    it('should get all cars', function(done){
        request
            .get('/cars')
            .set('Authorization', 'tokenmolon')
            .expect(200)
            .end(function(err,res){
                expect(err).to.be.null
                expect(res.body).to.deep.equal({
                    status: true,
                    data: [car]
                })
                done()
            })
    })

    it('should return error Not found', function(done){
        const error = errors.NotFound()
        
        request
            .get('/not-exists')
            .set('Authorization', 'tokenmolon')
            .expect(error.status)
            .end(function(err,res){
                expect(err).to.be.null
                expect(res.body).to.deep.equal({
                    status: false,
                    error: error.message
                })
                done()
            })
    })
})