var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
var MongoDBStore = require("connect-mongodb-session")(session);

var indexRouter = require("./routes/index");
var coursesRouter = require("./routes/courses");
var loginRouter = require("./routes/login");
var profileRouter = require("./routes/profile");
var logoutRouter = require("./routes/logout");
var getimageRouter = require("./routes/getimage");

console.log(require("dotenv").config({ path: "../.env" }));

var app = express();
app.set("trust proxy", 1);
const uri = process.env.URI;
mongoose.connect(uri).catch((err) => console.log(err));
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connection established!");
});
let store = new MongoDBStore({
  uri: uri,
  collection: "mySessions",
});
app.use(
  session({
    secret: "secret",
    store: store,
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      secure: "",
      maxAge: 1000 * 60 * 60 * 48,
      sameSite: "none",
    },
    proxy: false,
  })
);
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Headers", "content-type");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/courses", coursesRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/logout", logoutRouter);
app.use("/getimage", getimageRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
