
const {deleteFile} = require('../util/file-upload');
const Image = require('../models/image');

var imageService = exports = module.exports = {};

imageService.add = function(url) {
    let image = new Image({
        url: url
    });
    return image.save();
}

imageService.del = function(id) {
    return Image.findOneAndDelete(id)
        .then(banner => {
            if(!banner) {
                return res.status(404).send({
                    message: "Banner not found with id " + id
                });
            }
            return deleteFile(banner.url);
        });
}

imageService.all = async function(limit, skip, filter) {
    return await Promise.all([
        Image.find(filter).limit(limit).sort({created_at: -1}).skip(skip).lean().exec(),
        Image.countDocuments({})
      ]);
}