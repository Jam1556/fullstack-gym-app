const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const vaildator = require("validator")
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
})

// Static Signup mthod

userSchema.statics.signup = async function (email, password) {

  //validation
  if (!email || !password) {
    throw Error("All fields are not filled")
  }

  if (!vaildator.isEmail(email)) {
    throw Error("Email is not vaild")
  }

  if (!vaildator.isStrongPassword(password)) {
    throw Error("Password not strong enough")
  }


  const exists = await this.findOne({ email })

  if (exists) {
    throw Error("Email already in use")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user


}

module.exports = mongoose.model('User', userSchema)