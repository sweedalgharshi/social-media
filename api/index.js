const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

const userRoute = require("./routes/users.routes");
const authRoute = require("./routes/auth.routes");
const postRoute = require("./routes/post.routes");

dotenv.config();

mongoose.connection.once("open", () => {
  console.log("Mongo DB connection is ready...");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connect(process.env.MONGO_URL);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.listen(8800, () => {
  console.log("Listening on port 8800");
});
