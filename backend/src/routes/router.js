const express = require("express");
const { AuthController } = require("../controllers/authController");
const router = express.Router();


router.get("/", AuthController.welcome_msz);




module.exports = router;