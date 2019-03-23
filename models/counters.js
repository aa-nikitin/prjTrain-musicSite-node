const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countersSchema = new Schema({
  head: {
    type: String,
    required: true
  },
  headSite: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('counters', countersSchema);
