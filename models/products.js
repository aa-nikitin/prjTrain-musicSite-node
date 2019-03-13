const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('products', productsSchema);
