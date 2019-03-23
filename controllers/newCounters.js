const Counters = require('../models/counters');

module.exports = (req, res, next) => {
  const { head, headSite, name, count } = req.body;
  const newCounter = new Counters({
    head: head,
    headSite: headSite,
    name: name,
    count: count
  });

  newCounter.save().then(counter => {
    return res.json(counter);
  });
};
