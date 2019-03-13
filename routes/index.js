var express = require('express');
var router = express.Router();
const { test, newProduct } = require('../controllers');

/* POST test. */
router.post('/', test);
router.post('/newProduct/', newProduct);

module.exports = router;
