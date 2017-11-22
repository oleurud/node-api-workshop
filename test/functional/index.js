'use strict';

const app = require('../../index')
const expect = require('chai').expect
const request = require('supertest').agent(app)
const debug = require('debug')('app:test:functional:index')


describe('FUNCTIONAL API - INDEX', function(){
    it('should response ok (status)',function(done){
        const cars = {
            Lotus: ['Evora', 'Elise'],
            Maserati: ['Ghibli', 'Levante'],
            Tesla: []
        }

        request
            .get('/cars')
            .set('Authorization', 'tokenmolon')
            .expect(200)
            .end(function(err,res){
                expect(err).to.be.null
                expect(res.body).to.deep.equal(cars)
                done()
            })
    })
})