const express = require("express");
const { createUser, signin } = require("./user.controller");
const passport = require("passport");

const authRouter = express.Router();

authRouter.post("/signup", createUser);
authRouter.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = authRouter;
