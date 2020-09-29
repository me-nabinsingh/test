const request = require('supertest');
const app = require('../server');
var assert = require('assert');

describe('GET /', () => {
    it('gets welcome message', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body, 'Welcome to Real Estate Agency API');
                done();
            });
    });
});