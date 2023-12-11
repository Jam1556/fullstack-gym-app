const mongoose = require("mongoose");

const Schema = mongoose.Schema

const gymSchema = new Schema({
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('exercise', gymSchema)