const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        error: 'Указан неверный email или пароль'
      });
    }
    if (user) {
      res.cookie('access_token', user.access_token, {
        httpOnly: false,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        path: '/'
      });
      return res.status(200).json({ error: false });
    }
  })(req, res, next);
};
