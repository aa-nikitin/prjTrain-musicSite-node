const Product = require('../models/products');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  const form = new formidable.IncomingForm();
  const uploadDir = path.join('/static', '/media');

  form.uploadDir = path.join(process.cwd(), '/public', uploadDir);
  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }
    const { name, price } = fields;
    const fileNameDir = path.join(form.uploadDir, files.file.name);
    Product.findOne({ name }).then(product => {
      if (product) {
        return res.json({
          maessage: 'Товар с таким наименованием существует'
        });
      } else
        fs.rename(files.file.path, fileNameDir, err => {
          if (err) {
            return next(err);
          }

          const img = path.join(uploadDir, files.file.name);
          const newProduct = new Product({
            image: img,
            name: name,
            price: price
          });
          newProduct.save();
          return res.status(200).json({ maessage: 'Товар успешно добавлен' });
        });
    });
  });
};
