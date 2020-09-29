var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config');
var userService = require('../services/userService');

var authController = exports = module.exports = {};

authController.register = function(req, res) {
    userService.add(req.body.email, req.body.password)
               .then(user => {
                    var token = jwt.sign({ id: user._id }, config.SECRECT, {
                        expiresIn: 86400 * 365 // expires in 1 Year
                    });
                    res.status(200).send({ auth: true, token: token });
               })
               .catch(err => {
                    if (err) return res.status(500).send({error: "There was a problem registering the user."})
               });
}


authController.login = function(req, res) {
    userService.findOne({email: req.body.email})
        .then(user => {
            
            if(!user) {
                return res.status(404).send({error: 'No user found.'});
            }
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.status(401).send({ auth: false, token: null });
            }
            var token = jwt.sign({ id: user._id }, config.SECRECT, {
                expiresIn: 86400 * 365 // expires in 1 Year
            });
            res.status(200).send({ auth: true, token: token });
        })
        .catch(err => {
            console.log(err);
            if (err) return res.status(500).send({err: err, msg: 'Error on the server.'});
        });
}