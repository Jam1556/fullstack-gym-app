const mongoose = require("mongoose");

const Schema = mongoose.Schema

const gymSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  reps: {
    type: String,
    required: true
  },
  sets: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('Exercise', gymSchema)