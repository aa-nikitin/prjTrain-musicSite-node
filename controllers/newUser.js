const User = require('../models/user');
const jwt = require('jwt-simple');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const user = { email: 'admin@mail.ru', password: '123' };
  const newUser = new User({
    email: user.email
  });
  newUser.setPassword(user.password);
  newUser.setToken(jwt.encode({ email: user.email }, secret));

  User.find({})
    .then(users => {
      if (!users[0]) return newUser.save();
    })
    .then(user => {
      return res.json(user);
    })
    .catch(next);
};
