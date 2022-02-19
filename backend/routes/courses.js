var express = require("express");
var router = express.Router();
const session = require("express-session");
const Course = require("../models/course.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.post("/add", function (req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;
  const length = req.body.length;
  const newCourse = new Course({ title, description, tags, length });
  newCourse
    .save()
    .then(() => console.log("New Course Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
