var express = require('express');
var router = express.Router();
const { test } = require('../controllers');

/* POST test. */
router.post('/', test);

module.exports = router;
