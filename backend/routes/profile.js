var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let sess = req.session;
  if (sess.loggedIn) {
    res.send({ username: sess.username, loggedIn: true });
  } else {
    res.send({ loggedIn: false });
  }
});

module.exports = router;
