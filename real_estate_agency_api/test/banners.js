const request = require('supertest');
const app = require('../server');
const Banner = require('../models/banner');
var expect = require('chai').expect;

const data = {
    title: "Real Estate Agency",
    intro: "Hydrogen atoms radio telescope kindling the energy hidden in matter stirred by starlight dispassionate extraterrestrial observer inconspicuous motes of rock and gas"
}


describe('Banners', () => {
    let token;
    let newBanner;

    before((done) => {
        Banner.remove({}, (err) => { 
            done()  
         });
    });

    before((done) => {
        request(app)
            .post('/api/v1/auth/login')
            .send({
                email: "hello@gmail.com",
                password: "x^9=wgCX9j,k^G"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                token = res.body.token;
                if (err) return done(err);
                done();
            });
    });

    it('Should not have any banners', (done) => {
        request(app)
            .get('/api/v1/banners')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.be.empty;
                if (err) return done(err);
                done();
            });
    });


    it('Should not allow to add  new banner', (done) => {
        request(app)
            .post('/api/v1/banners')
            .send(data)
            .set('Accept', 'application/json')
            .expect(403)
            .end(function(err, res) {
                expect(res.body.auth).to.be.false;
                expect(res.body.message).to.equal('No token provided.');
                if (err) return done(err);
                done();
            });
    });

    it('Should add  new banner', (done) => {
        request(app)
            .post('/api/v1/banners')
            .send(data)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                newBanner = res.body.data;
                expect(res.body.data._id).to.be.a('string');
                expect(res.body.data.title).to.equal(data.title);
                expect(res.body.data.intro).to.equal(data.intro);
                if (err) return done(err);
                done();
            });
    });

    it('Should have one banner', (done) => {
        request(app)
            .get('/api/v1/banners')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data.length).to.equal(1);
                if (err) return done(err);
                done();
            });
    });

    it('Should update banner', (done) => {
        newBanner.title = `Updated ${newBanner.title}`;

        request(app)
            .put(`/api/v1/banners/${newBanner._id}`)
            .send(newBanner)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data.title).to.equal(newBanner.title);
                if (err) return done(err);
                done();
            });
    });

    it('Should delete banner', (done) => {
        request(app)
            .delete(`/api/v1/banners/${newBanner._id}`)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.message).to.equal('Banner deleted successfully!');
                if (err) return done(err);
                done();
            });
    });

    it('Should not have any banners', (done) => {
        request(app)
            .get('/api/v1/banners')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.be.empty;
                if (err) return done(err);
                done();
            });
    });


});