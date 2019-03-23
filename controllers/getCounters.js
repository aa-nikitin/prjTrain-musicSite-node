const Counters = require('../models/counters');

module.exports = (req, res, next) => {
  Counters.find({})
    .then(counters => {
      return res.status(200).json(counters);
    })
    .catch(next);
};
