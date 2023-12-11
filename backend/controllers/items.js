const Exercise = require("../models/model")

// Create Api Functions

const getExercise = async (req, res) => {
  const items = await Exercise.find({})
  res.json({
    message: "All items ",
    exercise: items
  })
}












module.exports = {
  getExercise

}