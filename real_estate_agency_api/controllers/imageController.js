var imageService = require('../services/imageService');
const paginate = require('express-paginate');


var imageController = exports = module.exports = {};

imageController.add = function(req, res) {
    imageService.add(req.file.location)
                .then(data => {
                    res.status(200).send({data: data});
                })
                .catch(err => {
                    if (err) return res.status(500).send("There was a problem adding banner.")
                });
}

imageController.del = function(req, res) {
    imageService.del(req.params.id)
                .then(() => {
                    res.status(200).send({message: "Image deleted successfully!"});
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Could not delete banner with id " + req.params.noteId
                    });
                });
        
}


imageController.all = function(req, res) {
    imageService.all(req.query.limit, req.skip, req.filter)
                .then(([results, itemCount]) => {
                    const pageCount = Math.ceil(itemCount / req.query.limit);
                    res.status(200).send({
                        has_more: paginate.hasNextPages(req)(pageCount),
                        data: results});
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Could not get images "
                    });
                })
}