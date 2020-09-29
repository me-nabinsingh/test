var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BannerSchema = new Schema({
    title: {type: String, required: true, max: 100},
    intro: {type: String, required: true, max: 256},
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});

module.exports =  mongoose.model('Banner', BannerSchema );
