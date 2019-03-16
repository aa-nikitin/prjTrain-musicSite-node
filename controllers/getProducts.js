const Product = require('../models/product');

module.exports = (req, res, next) => {
  Product.find({})
    .then(products => {
      return res.status(200).json(products);
    })
    .catch(next);
};
