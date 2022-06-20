const express = require("express");
const userRouter = require("./routes/user.route,");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1", userRouter);

app.use(errorMiddleware);
module.exports = app;
