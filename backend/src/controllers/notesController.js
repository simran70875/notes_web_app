const userSchema = require("../models/user");
const noteSchema = require("../models/notes");

class NotesController {
  static getNotes = async (req, res) => {
    const  userID  = req.params.id;
    try {
      console.log(userID);
      const getUser = await userSchema.findById(userID);
      console.log(getUser);
      if (!getUser) {
        return res.send({ success: false, message: "User not found!" });
      }
      const getNotes = await noteSchema.find({ userID: userID });
       return res.send({ success: true, data: getNotes });
    } catch (error) {
     return res.send({ success: false, message: "Something went wrong!" });
    }
  };

  static addNote = async (req, res) => {
    const { userID, title, content } = req.body;
    try {
      const getUser = await userSchema.findById(userID);
      if (!getUser) {
        res.send({ success: false, message: "User not found!" });
      }
      const note = new noteSchema({
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
      return res
        .send()
        .status(500)
        .send({ success: false, message: error.message });
    }
  };

  static editNote = async (req, res) => {
    const noteID = req.params.id;
    const { title, content } = req.body;
    try {
      const updateNote = await noteSchema.findByIdAndUpdate(
        noteID,
        {
          title,
          content,
        },
        { new: true }
      );
      if (!updateNote) {
        return res.send({ success: false, message: "Note not found!" });
      }

      return res.send({
        success: true,
        message: "note updated Successfully ",
      });
    } catch (error) {
      console.error("Error While updating note ==> ", error);
      return res
        .send()
        .status(500)
        .send({ success: false, message: error.message });
    }
  };

  static deleteNote = async (req, res) => {
    const  noteID  = req.params.id;
    try {
      const removeNote = await noteSchema.findByIdAndDelete(noteID);
      if (!removeNote) {
        return res.send({ success: false, message: "Note not found!" });
      }

      return res.send({
        success: true,
        message: "note deleted Successfully ",
      });
    } catch (error) {
      console.error("Error While deleting note ==> ", error);
      return res
        .send()
        .status(500)
        .send({ success: false, message: error.message });
    }
  };
}

module.exports = { NotesController };
