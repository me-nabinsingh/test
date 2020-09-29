const request = require('supertest');
const app = require('../server');
const Image = require('../models/image');
var expect = require('chai').expect;



describe('Images', () => {
    let token;
    let newImage;

    before((done) => {
        Image.remove({}, (err) => { 
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


    it('Should not have any images', (done) => {
        request(app)
            .get('/api/v1/images')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.be.empty;
                if (err) return done(err);
                done();
            });
    });

    it('Should add  new image', (done) => {
        request(app)
            .post('/api/v1/images')
            .attach("filepond", 'test/fixtures/planets.jpg')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                newImage = res.body;
                expect(res.body.data).to.contain.keys('_id', 'url');
                if (err) return done(err);
                done();
            });
    })
    .timeout(10000);

    it('Should not allow to delete image', (done) => {
        request(app)
            .delete(`/api/v1/images/${newImage._id}`)
            .set('Accept', 'application/json')
            .expect(403)
            .end(function(err, res) {
                expect(res.body.auth).to.be.false;
                expect(res.body.message).to.equal('No token provided.');
                if (err) return done(err);
                done();
            });
    });


    it('Should delete image', (done) => {
        request(app)
            .delete(`/api/v1/images/${newImage._id}`)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.message).to.equal('Image deleted successfully!');
                if (err) return done(err);
                done();
            });
    });
});