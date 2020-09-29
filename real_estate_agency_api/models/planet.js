var mongoose = require('mongoose');
var Image = require('./image');
var Schema = mongoose.Schema;

var PlanetSchema = new Schema({
    name: {type: String, required: true, max: 100},
    short_description: {type: String, required: true, max: 256},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    mass: {type: Number, default: 0.00},
    diameter: {type: Number, default: 0.00},
    density: {type: Number, default: 0.00},
    is_featured: {type: Boolean, default: false}, 
    images: [{type: String, ref: 'Image'}],
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});

module.exports =  mongoose.model('Planet', PlanetSchema );
