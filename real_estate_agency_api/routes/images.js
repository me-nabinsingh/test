var express = require('express');
var router = express.Router();
var imageController = require('../controllers/imageController');
const { upload } = require('../util/file-upload');
var verifyToken = require('../middlewares/verifyToken');

router.post('/',  upload.single('filepond') ,imageController.add)
router.get('/', imageController.all)
router.delete('/:id', verifyToken,  imageController.del)
    
module.exports = router;