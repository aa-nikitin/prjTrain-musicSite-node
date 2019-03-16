var express = require('express');
var router = express.Router();
const {
  test,
  newProduct,
  getProducts,
  login,
  logout,
  newUser,
  authFromToken
} = require('../controllers');

/* POST test. */
router.post('/', test);
router.post('/newProduct/', newProduct);
router.get('/getProducts/', getProducts);

router.post('/login/', login);
router.post('/authFromToken/', authFromToken);
router.get('/newUser/', newUser);
router.post('/logout/', logout);

module.exports = router;
