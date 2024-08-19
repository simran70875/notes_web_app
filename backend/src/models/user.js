const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  email: { type: String,  unique: true },
  address: { type: String },
  password: { type: String, required: true },
  status: { type: Boolean, required: true, default: true },
});

module.exports = mongoose.model("users", userSchema);
