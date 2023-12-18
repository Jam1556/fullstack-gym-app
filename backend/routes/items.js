const express = require("express");
const router = express.Router(); // creates a router
const exerciseController = require("../controllers/items")



router.get("/items", exerciseController.getExcrcise)
router.delete("/items/:id", exerciseController.deleteExercise)
router.patch("/items/:id", exerciseController.editExercise)
router.post("/items", exerciseController.createExercise)
router.get("/items/:id", exerciseController.getExercise)


module.exports = router



//Each router crossponding the CRUD operation