const express = require("express");
const router = express.Router(); // creates a router
const exerciseController = require("../controllers/items")



router.get("/items", exerciseController.getExercises)
router.delete("/items/:id", exerciseController.deleteExercise)
router.patch("/item/:id", exerciseController.editExercise)
router.post("/item", exerciseController.createExercise)
router.get("/item/:id", exerciseController.getExercise)


module.exports = router



//Each router crossponding the CRUD operation