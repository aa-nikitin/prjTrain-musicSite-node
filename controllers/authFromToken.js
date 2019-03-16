const passport = require('passport');

module.exports = (req, res, next) => {
  if (req.cookies.access_token) {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(200).json({
          error: `Пользователь с таким токеном не найден`
        });
      }
      if (user) {
        return res.status(200).json({ error: false });
      }
    })(req, res, next);
  }
};
