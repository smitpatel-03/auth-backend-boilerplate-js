const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");

dotenv.config({
  path: "config/config.env",
});

connectDatabase();

app.listen(process.env.PORT);
