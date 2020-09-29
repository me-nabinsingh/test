const Banner = require('../models/banner');

var bannerService = exports = module.exports = {};

bannerService.add = function(data) {
    let banner = new Banner(data);
    return banner.save();
}

bannerService.update = function(data) {
    let banner = {
        title: data.title,
        intro: data.intro,
        updated_at: Date.now()
    }
    return Banner.updateOne(Banner.findOne({_id: data._id}), banner);
}


bannerService.del = function(id) {
    return Banner.findOneAndDelete(id);
}

bannerService.all = async function(limit, skip) {
    return await Promise.all([
        Banner.find({}).limit(parseInt(limit)).sort({created_at: -1}).skip(parseInt(skip)).lean().exec(),
        Banner.countDocuments({})
      ]);
}

bannerService.findOne = function(id) {
    return Banner.findOne({_id: id})
}