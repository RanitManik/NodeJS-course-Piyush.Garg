const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");

const app = express();
const PORT = 5000;
const url = "mongodb://127.0.0.1:27017/url";

connectMongoDB(url, (err, db) => {
  if (err) {
    console.error(err);
  }
}).then(() => {
  console.log("Connected to MongoDB");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/", staticRoute);
app.use("/", userRoute);
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/home", staticRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
