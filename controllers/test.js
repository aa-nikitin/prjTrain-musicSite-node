module.exports = (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  return res.status(200).json({ name: name });
};
