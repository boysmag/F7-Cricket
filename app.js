var express =require('express');
var routes =require('./routes');
var path=require('path');

var app=express();

var logger=require('morgan');
var methodOverride=require('method-override');
var session=require('express-session');
var bodyParser=require('body-parser');
var multer=require('multer');
var errorHandler=require('errorhandler');

var MongoClient = require('mongodb').MongoClient;
// Database
var db;

// setup mongo connection
MongoClient.connect('mongodb://127.0.0.1:27017/myMongoDB', function(err, database) {
	if (err) {
		throw err;
	}
	else {
		db = database;
		console.log("Connected to db!");
	}
});

// make our db accessible to our router
app.use(function(req, res, next) {
	req.db = db;
	next();
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'aspire'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));



// routes
app.get('/', routes.homePlayer);
app.get('/player/:name', routes.findByName);
app.get('/profileofPlayer/:name',routes.profileofPlayer);
app.post('/create', routes.createPlayer);
app.post('/update', routes.updatePlayer);
app.post('/delete', routes.deletePlayer);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
