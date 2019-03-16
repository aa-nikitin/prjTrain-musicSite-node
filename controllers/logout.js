module.exports = (req, res) => {
  res.cookie('access_token', '', {
    httpOnly: false,
    expires: new Date(Date.now() + 1),
    path: '/'
  });
  return res.json({});
};
