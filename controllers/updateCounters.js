const Counters = require('../models/counters');

module.exports = (req, res, next) => {
  const { name, count } = req.body;
  Counters.updateOne({ name: name }, { $set: { count: count } }, { new: true })
    .then(counters => {
      return res.status(200).json(counters);
    })
    .catch(next);
};
