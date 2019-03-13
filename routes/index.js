var express = require('express');
var router = express.Router();
const { test, newProduct, getProducts } = require('../controllers');

/* POST test. */
router.post('/', test);
router.post('/newProduct/', newProduct);
router.get('/getProducts/', getProducts);

module.exports = router;
