const express = require("express");
const router = express.Router(); // creates a router
const exerciseController = require("../controllers/items")



router.get("/items", exerciseController.getExercises)
router.delete("/items/:Id", exerciseController.deleteExercise)
router.patch("/item/:id", exerciseController.editExercise)
router.put("/items/new", exerciseController.createExercise)
router.get("/item/:id", exerciseController.getExercise)


module.exports = router



//Each router crossponding the CRUD operation