const { json } = require("body-parser");
var express = require("express");
var router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  let sess = req.session;
  sess.set = true;
  if (sess.loggedIn) {
    console.log("Logged in " + sess.username);
    return res.redirect("/profile"); //Check if this does anything
  }
  res.send({ loggedIn: false });
});
// router.post("/", (req, res) => {
//   req.session.set = true;
//   res.send(JSON.stringify({ data: "Session set " + req.sessionID }));
//   console.log(req.session);
// });
router.post("/api", function (req, res, next) {
  let sess = req.session;
  if (sess.loggedIn) {
    res.send(
      JSON.stringify({ data: "You are already logged in.", loggedIn: true })
    );
  } else {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body, password);
    User.findOne({ username: username, password: password })
      .then((user) => {
        if (user != null) {
          sess.username = user.username;
          sess.loggedIn = true;
          res.send(
            JSON.stringify({
              data: `Login Succesful, welcome ${sess.username}`,
              loggedIn: true,
            })
          );
          console.log(req.session);
        } else {
          res.send(JSON.stringify({ data: "No such user", code: -1 }));
        }
      })
      .catch((err) => res.status(400).json("Error: " + err));
  }
});
router.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  User.findOne({ username: username }).then((user) => {
    if (user != null) {
      res.send(
        //Try implementing to check for duplicate emails too.
        json.stringify({
          data: `There is already a user with ${username} username` + user,
        })
      );
    } else {
      let newUser = new User({
        username: username,
        email: email,
        password: password,
      });
      newUser
        .save()
        .then(() => console.log("Successful Registration!"))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});
module.exports = router;
