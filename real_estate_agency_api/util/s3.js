const aws = require('aws-sdk');
const config = require('../config');

aws.config.update({
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    region: 'us-east-2'
});

const s3 = new aws.S3();

module.exports = s3;