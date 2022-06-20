const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/auth-backend", {})
    .then((e) => {
      console.log("database is running at ", e.connection.host);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
