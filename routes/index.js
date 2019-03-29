var express = require('express');
var router = express.Router();
const passport = require('passport');
const authJwt = passport.authenticate('jwt', { session: false });
const {
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

router.get('/getProducts/', getProducts);
router.get('/getCounters/', getCounters);
router.post('/sendOrder/', sendOrder);

router.post('/login/', login);
router.post('/authFromToken/', authFromToken);
router.post('/logout/', logout);

router.post('/newUser/', authJwt, newUser);
router.post('/newCounters/', authJwt, newCounters);

router.post('/newProduct/', authJwt, newProduct);
router.put('/updateCounters/', authJwt, updateCounters);

module.exports = router;
