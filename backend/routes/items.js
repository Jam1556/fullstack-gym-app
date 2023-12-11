const express = require("express");
const router = express.Router(); // creates a router
const exerciseController = require("../controllers/items")



router.get("/item", exerciseController.getExercise)


module.exports = router



//Each router crossponding the CRUD operation