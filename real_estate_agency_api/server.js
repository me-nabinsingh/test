var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var auth = require('./routes/auth');
var banners = require('./routes/banners');
var planets = require('./routes/planets');
var images = require('./routes/images');

var config = require('./config');

var app = express();
const port = config.PORT

//Connect to MongoDB
var mongoDB = config.DB_URI;
mongoose.connect(mongoDB, 
    { 
        useNewUrlParser: true,
        useCreateIndex: true
    }
);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//Routers
app.use('/', indexRouter);
app.use('/api/v1/auth', auth);
app.use('/api/v1/images', images);
app.use('/api/v1/banners', banners);
app.use('/api/v1/planets', planets);


app.listen(port, function (err) {
    if (err) {
        throw err; //
    }
    console.log("API Up and running on port " + port);
});

module.exports = app;
