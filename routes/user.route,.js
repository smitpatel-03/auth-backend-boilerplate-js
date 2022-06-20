const express = require("express");
const {
  regiterUser,
  loginUser,
  forgotPassword,
  logoutUser,
  resetPassword,
} = require("../controller/user.controller");
const { isAuthenticated, authorizedUser } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.route("/register").post(regiterUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").get(logoutUser);
userRouter.route("/password/forgot").post(forgotPassword);
userRouter.route("/password/reset/:token").post(resetPassword);

module.exports = userRouter;
