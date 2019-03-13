const Product = require('../models/products');

module.exports = (req, res, next) => {
  Product.find({})
    .then(products => {
      return res.status(200).json(products);
    })
    .catch(next);
};
