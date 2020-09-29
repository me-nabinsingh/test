const request = require('supertest');
const app = require('../server');
const Planet = require('../models/planet');
var expect = require('chai').expect;

const data = {
    "mass":0.815,
    "diameter":12104,
    "density":5.2,
    "is_featured": true,
    "images":[],
    "name":"Venus",
    "price":50000,
    "short_description":"Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun would rise in the west and set in the east).","description":"Venus is a terrestrial planet and is sometimes called Earth's \"sister planet\" because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is 92 times that of Earth, or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far the hottest planet in the Solar System, with a mean surface temperature of 735 K (462 °C; 863 °F), even though Mercury is closer to the Sun. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past,[16][17] but these would have vaporized as the temperature rose due to a runaway greenhouse effect.[18] The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field.[19] Venus's surface is a dry desertscape interspersed with slab-like rocks and is periodically resurfaced by volcanism.",
    
}


describe('Planets', () => {
    let token;
    let newPlanet;

    before((done) => {
        Planet.remove({}, (err) => { 
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

    it('Should not have any planets', (done) => {
        request(app)
            .get('/api/v1/planets')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.be.empty;
                if (err) return done(err);
                done();
            });
    });


    it('Should not allow to add  new planet', (done) => {
        request(app)
            .post('/api/v1/planets')
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

    it('Should add  new planet', (done) => {
        request(app)
            .post('/api/v1/planets')
            .send(data)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                newPlanet = res.body.data;
                expect(res.body.data.name).to.equal(data.name);
                if (err) return done(err);
                done();
            });
    });

    it('Should have one planet', (done) => {
        request(app)
            .get('/api/v1/planets')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data.length).to.equal(1);
                if (err) return done(err);
                done();
            });
    });

    it('Should update planet', (done) => {
        newPlanet.title = `Updated ${newPlanet.title}`;

        request(app)
            .put(`/api/v1/planets/${newPlanet._id}`)
            .send(newPlanet)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data.name).to.equal(newPlanet.name);
                if (err) return done(err);
                done();
            });
    });

    it('Should delete planet', (done) => {
        request(app)
            .delete(`/api/v1/planets/${newPlanet._id}`)
            .set('Accept', 'application/json')
            .set('x-access-token', token)
            .expect(200)
            .end(function(err, res) {
                expect(res.body.message).to.equal('Planet deleted successfully!');
                if (err) return done(err);
                done();
            });
    });

    it('Should not have any planets', (done) => {
        request(app)
            .get('/api/v1/planets')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.be.empty;
                if (err) return done(err);
                done();
            });
    });

});