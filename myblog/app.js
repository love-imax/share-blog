var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var reg = require('./routes/reg');
var login = require('./routes/login');
var person = require('./routes/person');
var music = require('./routes/music');
var video = require('./routes/video');
var navigation = require('./routes/navigation');
var logout = require('./routes/logout');
var article = require('./routes/article');


var settings = require('./settings');
var flash = require('connect-flash');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: settings.cookieSecret,
  key: settings.db,//cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  Store: new MongoStore({
   url:"mongodb://localhost/blog"
  })
}));
app.use(flash());
app.use('/', index);
app.use('/', reg);
app.use('/', login);
app.use('/', person);
app.use('/', music);
app.use('/', video);
app.use('/', navigation);
app.use('/', logout);
app.use('/', article);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// test
module.exports = app;
