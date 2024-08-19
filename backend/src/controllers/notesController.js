const {
  getBcryptedPassword,
  comparePassword,
} = require("../utils/bcryptPassword");
const ifUserExists = require("../services/isUserExist");
const userSchema = require("../models/user");
const noteSchema = require("../models/notes");

class NotesController {
  static addNote = async (req, res) => {
    const { userID, title, content } = req.body;
    try {
      if (!userID) {
        res.send("Login to continue");
      }
      const note = noteSchema({
        userID,
        title,
        content,
      });
      //NOTE - save new data
      const data = await note.save();
      return res.send({
        success: true,
        data,
        message: "note added Successfully",
      });
    } catch (error) {
      console.error("Error While adding note ==> ", error);
      return res.send
        .status(500)
        .send({ success: false, message: error.message });
    }
  };

  static editNote = async (req, res) => {
    const { noteID, title, content } = req.body;
    try {
      const updateNote = noteSchema.findByIdAndUpdate(
        noteID,
        {
          title,
          content,
        },
        { new: true }
      );
      if (!updateNote) {
        return res.send("Note not found!");
      }

    
      return res.send({
        success: true,
        message: "note updated Successfully ",
      });
    } catch (error) {
      console.error("Error While updating note ==> ", error);
      return res.send
        .status(500)
        .send({ success: false, message: error.message });
    }
  };

  static deleteNote = async (req, res) => {
    const { noteID } = req.body;
    try {
      const removeNote = noteSchema.findByIdAndDelete(noteID);
      if (!removeNote) {
        return res.send("Note not found!");
      }

    
      return res.send({
        success: true,
        message: "note deleted Successfully ",
      });
    } catch (error) {
      console.error("Error While deleting note ==> ", error);
      return res.send
        .status(500)
        .send({ success: false, message: error.message });
    }
  };
}

module.exports = { NotesController };
