var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {type: String, unique: true, lowercase: true,  required: true, max: 100},
    password: {type: String, required: true, max: 100},
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});

module.exports =  mongoose.model('User', UserSchema );
