var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
router.get("/", function (req, res, next) {
  let query = "bread";
  let url =
    "https://api.unsplash.com/search/photos?query=" +
    query +
    "&per_page=10&client_id=" +
    process.env.UNSPLASH_KEY;
  console.log("Something should happen");
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let rand = Math.floor(Math.random() * 10);
      req.send(data.results[rand].urls.thumb);
    });
  res.send("worked");
});

module.exports = router;
