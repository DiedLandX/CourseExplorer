const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      unique: true,
    },
    tags: {
      type: Array,
      required: true,
      trim: true,
    },
    length: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
