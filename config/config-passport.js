const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

const secret = process.env.JWT_SECRET;

const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: secret,
  jwtFromRequest: req => {
    var token = null;
    if (req && req.cookies) {
      token = req.cookies['access_token'];
    } else if (req.headers) {
      token = req.headers['access_token'];
    }
    return token;
  }
};

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!user.validPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(err => done(err));
  })
);

passport.use(
  new Strategy(params, (payload, done) => {
    User.findOne({ email: payload.email })
      .then(user => {
        if (!user) {
          return done(new Error('User not found'));
        }
        return done(null, user);
      })
      .catch(err => done(err));
  })
);
