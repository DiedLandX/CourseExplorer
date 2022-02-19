var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");
    if (err) {
      console.log(err);
    }
    res.send({ loggedIn: false });
  });
});

module.exports = router;
