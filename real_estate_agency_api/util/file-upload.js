const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config');
const s3 = require('./s3');

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
}


/**
 * Upload file to S3 bucket
 */
const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: config.AWS_UPLOAD_BUCKET,
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + file.originalname)
    }
  })
});


/**
 * Delete file from S3 bucket
 * @param {String} key 
 */
function deleteFile(key) {
  return s3.deleteObject(
    {
      Bucket: config.AWS_UPLOAD_BUCKET,
      Key: key
    }
  );
}

module.exports = {
  upload,
  deleteFile
};