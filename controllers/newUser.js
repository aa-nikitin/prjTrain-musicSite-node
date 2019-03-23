const User = require('../models/user');
const jwt = require('jwt-simple');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const newUser = new User({
    email: email
  });
  newUser.setPassword(password);
  newUser.setToken(jwt.encode({ email: email }, secret));

  User.findOne({ email })
    .then(user => {
      if (!user) {
        newUser.save().then(user => {
          return res.json(user);
        });
      } else {
        return res
          .status(200)
          .json({ maessage: 'Такой пользователь существует' });
      }
    })
    .catch(next);
};
