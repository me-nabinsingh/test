var bcrypt = require('bcryptjs');
var User = require('../models/user');

var userService = exports = module.exports = {};

userService.add = function(email, password) {
    var hashedPassword = bcrypt.hashSync(password, 8);

    let user = new User({
        email : email,
        password : hashedPassword
    });

    return user.save();

}

userService.findOne = function(filter) {
    return User.findOne(filter);
}