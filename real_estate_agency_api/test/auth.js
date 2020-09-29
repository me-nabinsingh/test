const request = require('supertest');
const app = require('../server');
const User = require('../models/user');
var expect = require('chai').expect;


describe('User Auth', () => {

    before((done) => {
        User.remove({}, (err) => { 
            done();           
         });
    })


    let data = {};
    beforeEach(() => {
        data = {
            email: "hello@gmail.com",
            password: "x^9=wgCX9j,k^G"
        }        
    })


    it('Should not register new user', (done) => {
        delete data.password;

        request(app)
            .post('/api/v1/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect(500)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });


    it('Should register new user', (done) => {
        request(app)
            .post('/api/v1/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.auth).to.be.true;
                expect(res.body.token).to.be.a('string');
                if (err) return done(err);
                done();
            });
    });


    it("Should not find user email ", (done) => {
        data.email = "jacky@gmail.com";

        request(app)
            .post('/api/v1/auth/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end(function(err, res) {
                expect(res.body.error).to.equal('No user found.');
                if (err) return done(err);
                done();
            });
    });


    it("Should not authenticate user", (done) => {
        data.password = "some_random_password";

        request(app)
            .post('/api/v1/auth/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(401)
            .end(function(err, res) {
                expect(res.body.auth).to.be.false;
                expect(res.body.token).to.be.null;
                if (err) return done(err);
                done();
            });
    });

    it("Should authenticate user", (done) => {
        
        request(app)
            .post('/api/v1/auth/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.auth).to.be.true;
                expect(res.body.token).to.be.a('string');
                if (err) return done(err);
                done();
            });
    });


});