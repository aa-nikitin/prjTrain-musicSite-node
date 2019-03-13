const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://user:qqqq0000@ds263640.mlab.com:63640/musicsite', {
  useNewUrlParser: true
});
// require('./user');
mongoose.connection.on('connected', () => {
  console.log(
    'Mongoose connection open mongodb://user:qqqq0000@ds263640.mlab.com:63640/musicsite'
  );
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected app termination');
    process.exit(0);
  });
});
