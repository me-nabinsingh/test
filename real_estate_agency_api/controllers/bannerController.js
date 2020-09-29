var bannerService = require('../services/bannerService');
const paginate = require('express-paginate');


var bannerController = exports = module.exports = {};


bannerController.add = function(req, res) {
    bannerService.add(req.body)
                .then(data => {
                    res.status(200).send({data: data});
                })
                .catch(err => {
                    if (err) return res.status(500).send("There was a problem adding banner.")
                });
}


bannerController.update = function(req, res) {
    bannerService.update(req.body)
                 .then(data => {
                    res.status(200).send({data: req.body});
                 })
                 .catch(err => {
                     console.log(err);
                     if (err) return res.status(500).send("There was a problem updating banner with id " + req.body._id)
                });
}


bannerController.all = async function(req, res) {
    bannerService.all(req.query.limit, req.query.offset)
                .then(([results, itemCount]) => {
                    const pageCount = Math.ceil(itemCount / req.query.limit);
                    res.status(200).send({
                        has_more: paginate.hasNextPages(req)(pageCount),
                        data: results});
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Could not get banners"
                    });
                })
}


bannerController.del = function(req, res) {
    bannerService.del(req.params.id)
                .then(() => {
                    res.status(200).send({message: "Banner deleted successfully!"});
                })
                .catch(err => {
                    return res.status(500).send({
                        message: "Could not delete banner with id " + req.params.noteId
                    });
                });
}

bannerController.findOne = function(req, res) {
    bannerService.findOne(req.params.id)
                 .then(result => {
                    res.status(200).send({data: result});
                 })
                 .catch(err => {
                    return res.status(204).send({
                        message: "Banner not found"
                    });
                })
}