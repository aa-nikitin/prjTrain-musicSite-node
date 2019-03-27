const Counters = require('../models/counters');

module.exports = (req, res, next) => {
  const jsonCounts = req.body;
  const promisesCounts = [];
  const { arrCounts } = jsonCounts;

  arrCounts.forEach(item => {
    const { name, count } = item;
    promisesCounts.push(
      Counters.updateOne(
        { name: name },
        { $set: { count: count } },
        { new: true }
      )
    );
  });

  Promise.all(promisesCounts).then(() => {
    return res.status(200).json({ maessage: 'Счетчики успешно изменены' });
  });
};
