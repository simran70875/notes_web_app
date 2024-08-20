const express = require("express");
const { AuthController } = require("../controllers/authController");
const { NotesController } = require("../controllers/notesController");
const router = express.Router();


router.get("/", AuthController.welcome_msz);
router.post("/register", AuthController.register);
router.post("/login", AuthController.loginUser);
router.post("/addNote", NotesController.addNote);
router.get("/getNotes/:id", NotesController.getNotes);
router.delete("/deleteNote/:id", NotesController.deleteNote);
router.put("/editNote/:id", NotesController.editNote);


module.exports = router;