const User = require('../models/userModel')

//login User

const loginUser = async (req, res) => {
  res.json({ message: " login user" })
}



// Sign up user

const signupUser = async (req, res) => {
  res.json({ message: " Sign up user" })
}


module.exports = {
  loginUser,
  signupUser
}