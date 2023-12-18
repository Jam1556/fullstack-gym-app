const express = require("express");
const router = express.Router();
// controller function
const userController = require("../controllers/userController")

//Login Route
router.post('/login', userController.loginUser)


//Signup Route
router.post('/signup', userController.signupUser)


module.exports = router