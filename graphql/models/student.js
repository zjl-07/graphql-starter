const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  gender: String,
  courseId: String
});

module.exports = mongoose.model("Student", StudentSchema);
