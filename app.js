var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

require('./models');

app.use(logger('dev'));
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/api', require('./routes'));

app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
