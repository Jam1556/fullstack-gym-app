const Exercise = require("../models/model")

// Create Api Functions

const getExercises = async (req, res) => {
  try {
    const items = await Exercise.find({})
    res.json({
      message: "All items ",
      exercise: items
    })
  } catch (error) {
    res.status(500).json({ Message: "Unable to get Exercies Error Info" + error })
  }
}


const deleteExercise = async (req, res) => {
  try {

    const { id } = req.params



    const deleteItem = await Exercise.findByIdAndDelete(id)
    if (!id) return res.status(500).json({ Message: "Id not found " + id })

    res.status(200).json(deleteItem)

  } catch (error) {

    res.status(500).json({ message: "Unable to Delete error Info = " + error })

  }
}

const editExercise = async (req, res) => {
  try {
    const { id } = req.params
    const { text } = req.body

    if (!id) return res.status(500).json({ Message: "Id not found " + req.params.id })

    const editItem = await Exercise.findByIdAndUpdate({ _id: id }, { text: text })

    res.status(200).json(editItem)

  } catch (error) {

    console.log(error)
    res.status(500).json({ message: "Unable to Edit error info " + error })

  }
}


const createExercise = async (req, res) => {
  try {
    const { text } = req.body
    const createObject = new Exercise({
      text,
    })
    const newObject = await createObject.save()
    if (!text) return res.status().json({ Message: "enter text" + req.body })
    res.status(200).json(newObject)
  } catch (error) {
    res.status(500).json({ Message: "Unable to create Error Info " + error })
  }
}

const getExercise = async (req, res) => {
  try {
    const { id } = req.params

    const getExercise = await Exercise.findById(id)
    res.status(200).json(getExercise)


    if (!id) return res.status(500).json({ Message: "Id not found " + req.params.id })




  } catch (error) {

    res.status(500).json({ Message: "Unable to Get Excercise Error Info " + error })

  }
}





module.exports = {
  getExercises,
  deleteExercise,
  editExercise,
  createExercise,
  getExercise

}