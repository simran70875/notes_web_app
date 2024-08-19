const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true},
  title: { type: String, required: true, },
  content: { type: String, required: true },
});

module.exports = mongoose.model("notes", noteSchema);
