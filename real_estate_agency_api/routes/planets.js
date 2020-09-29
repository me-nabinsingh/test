var express = require('express');
var router = express.Router();
var planetController = require('../controllers/planetController');
var verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken,  planetController.add)
router.get('/', planetController.all)
router.get('/:id', planetController.findOne)
router.put('/:id', verifyToken,  planetController.update)
router.delete('/:id', verifyToken,  planetController.del)
    
module.exports = router;