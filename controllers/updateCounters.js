const Counters = require('../models/counters');

module.exports = (req, res, next) => {
  const jsonCounts = req.body;
  // console.log(jsonCounts.arrCounts[1]);
  const { arrCounts } = jsonCounts;
  // const { arrCounts } = JSON.parse(jsonCounts);
  arrCounts.forEach(item => {
    const { name, count } = item;
    Counters.updateOne(
      { name: name },
      { $set: { count: count } },
      { new: true }
    ).catch(next);
  });
  return res.status(200).json({ maessage: 'Счетчики успешно изменены' });
};
