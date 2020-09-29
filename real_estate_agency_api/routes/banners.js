var express = require('express');
var router = express.Router();
var bannerController = require('../controllers/bannerController');
var verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken,  bannerController.add);
router.get('/', bannerController.all);
router.get('/:id', bannerController.findOne);
router.delete('/:id', verifyToken,  bannerController.del);
router.put('/:id', verifyToken,  bannerController.update);
    
module.exports = router;