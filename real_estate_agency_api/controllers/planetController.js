var planetService = require('../services/planetService');
const paginate = require('express-paginate');


var planetController = exports = module.exports = {};

planetController.add = function(req, res) {
    planetService.add(req.body)
        .then(data => {
            res.status(200).send({data: data});
        })
        .catch(err => {
            if (err) return res.status(500).send("There was a problem adding planet.")
        });
}

planetController.update = function(req, res) {
    planetService.update(req.body)
                 .then(data => {
                    res.status(200).send({data: req.body});
                 })
                 .catch(err => {
                     console.log(err);
                     if (err) return res.status(500).send("There was a problem updating planet with id " + req.body._id)
                });
}

planetController.del = function(req, res) {
    planetService.del(req.params.id)
                .then(() => {
                    res.status(200).send({message: "Planet deleted successfully!"});
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Could not delete planet with id " + req.params.id
                    });
                });
        
}


planetController.all = async function(req, res) {
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const filter = req.query.filter? JSON.parse(req.query.filter) : {};

    planetService.all(limit, skip, filter)
        .then(([results, itemCount]) => {
            const pageCount = Math.ceil(itemCount / req.query.limit);
            res.status(200).send({
                has_more: paginate.hasNextPages(req)(pageCount),
                data: results});
        })
        .catch(err => {

            console.log(err)
            return res.status(500).send({
                message: "Could not get planets "
            });
        });
}

planetController.findOne = function(req, res) {
    planetService.findOne(req.params.id)
                 .then(result => {
                    res.status(200).send({data: result});
                 })
                 .catch(err => {
                    return res.status(204).send({
                        message: "Planet not found"
                    });
                })
}