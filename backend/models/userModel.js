import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requied: true,
  },
  roole: {
    type: String,
    default: user,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
})

const User = mongoose.model("User", userSchema)

export default User
