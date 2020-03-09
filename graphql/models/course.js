const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: String,
  teacher: String
});

module.exports = mongoose.model("Course", CourseSchema);
