// middlewares/passport.js
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JwtStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;
require("dotenv").config();

const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  async (username, password, next) => {
    try {
      const user = await User.findOne({ username: username });

      if (!user) {
        return next({ msg: "Username or password is wrong!" });
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword == false) {
        return next({ msg: "Username or password is wrong!" });
      }
      next(false, user); //req.user
    } catch (error) {
      next(error);
    }
  }
);

const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey:
      "bac3593a94734ef88a33e762b1e9bdc9ca29701b6a34afb936777bb8dbb4ab4d",
  },
  async (payload, next) => {
    // here you check if token is expired:

    // const tokenExpired = new Date(decoded.exp * 1000) < new Date();

    //   if (tokenExpired) {
    //     return next({ msg: 'Token expired' });
    //   }

    const user = await User.findById(payload._id);

    if (!user) {
      return next({ msg: "User not found!" });
    }

    next(false, user); // req.user
  }
);

module.exports = { localStrategy, jwtStrategy };
