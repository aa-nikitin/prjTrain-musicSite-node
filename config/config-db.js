const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_NAME } = process.env;
const connectAddress = `mongodb://${DB_USER}:${DB_PASS}@${DB_NAME}`;

mongoose.Promise = global.Promise;

mongoose.connect(connectAddress, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open ${connectAddress}`);
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
