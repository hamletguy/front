import mongoose from "mongoose";

//Creating the userSchema and building the model

const userSchema = mongoose.Schema({
  Email: { required: true, type: String, minlength: 12 },
  Password: { required: true, minlength: 6, type: string },
});
module.exports = mongoose.Model("userModel", userSchema);
