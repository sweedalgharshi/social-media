const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config();

mongoose.connection.once("open", () => {
  console.log("Mongo DB connection is ready...");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connect(process.env.MONGO_URL);

app.listen(8800, () => {
  console.log("Listening on port 8800");
});
