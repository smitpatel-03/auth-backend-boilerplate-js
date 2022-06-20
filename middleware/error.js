const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // Wrong mongodb Id error
  if (err.name === "CastError") {
    const message = `resource not found ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  //Mogoose duplicate key error

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonwebTokenError") {
    const message = `Json web token error, try again`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonwebExpireError") {
    const message = `Json web token is Expired, try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
