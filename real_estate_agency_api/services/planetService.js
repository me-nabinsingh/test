
const Planet = require('../models/planet');

var planetService = exports = module.exports = {};

planetService.add = function(data) {
    let planet = new Planet({
        name: data.name,
        price: data.price,
        short_description: data.short_description,
        mass: data.mass,
        diameter: data.diameter,
        density: data.density,
        description: data.description,
        is_featured: data.is_featured,
        images: data.images.map(image => {
            return image.value
        })
    });
    return planet.save();
}

planetService.update = function(data) {
    let planet = {
        name: data.name,
        price: data.price,
        short_description: data.short_description,
        mass: data.mass,
        diameter: data.diameter,
        density: data.density,
        description: data.description,
        is_featured: data.is_featured,
        images: data.images.map(image => {
            return image.value
        }),
        updated_at: Date.now()
    }
    return Planet.updateOne(Planet.findOne({_id: data._id}), planet);
}


planetService.del = function(id) {
    return Planet.findOneAndDelete(id);
}

planetService.all = async function(limit, skip, filter) {
    return await Promise.all([
        Planet.find(filter).populate('images', '_id url').limit(limit).sort({created_at: -1}).skip(skip).lean().exec(),
        Planet.countDocuments({})
      ]);
}

planetService.findOne = function(id) {
    return Planet.findOne({_id: id}).populate('images', '_id url')
}