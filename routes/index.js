var express = require('express');
var router = express.Router();
const {
  test,
  newProduct,
  getProducts,
  login,
  logout,
  newUser,
  authFromToken,
  newCounters,
  getCounters,
  updateCounters,
  sendOrder
} = require('../controllers');

/* POST test. */
// router.post('/', test);
router.post('/newProduct/', newProduct);
router.get('/getProducts/', getProducts);

router.post('/login/', login);
router.post('/authFromToken/', authFromToken);
router.post('/logout/', logout);

router.post('/newUser/', newUser);
router.post('/newCounters/', newCounters);

router.get('/getCounters/', getCounters);
router.put('/updateCounters/', updateCounters);

router.post('/sendOrder/', sendOrder);

module.exports = router;
