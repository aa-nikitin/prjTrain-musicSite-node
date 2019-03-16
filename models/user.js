const mongoose = require('mongoose');
const bCrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  access_token: {
    type: String
  }
});

userSchema.methods.setPassword = function(password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
  return bCrypt.compareSync(password, this.password);
};

userSchema.methods.setToken = function(token) {
  this.access_token = token;
};

module.exports = mongoose.model('user', userSchema);

// module.exports = mongoose.model('user', userSchema);
