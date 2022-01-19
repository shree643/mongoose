const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  usn: {
    type: Number,
    required: true,
    default: 00,
  },
});

module.exports = mongoose.model("student", studentSchema);
