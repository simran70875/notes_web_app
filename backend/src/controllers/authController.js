const { getBcryptedPassword, comparePassword } = require("../utils/bcryptPassword");
const ifUserExists =  require("../services/isUserExist")
const userSchema = require('../models/user');

class AuthController {
  static welcome_msz = (req,res) => {
    res.send("Welcome to Notes backend");
  };

  static register = async(req,res) => {
    const { username, phone, email, address, password, confirmPassword} =  req.body;
    try {
      //NOTE -  Check if password and confirmPassword match
      if(password != confirmPassword){
        return res.status(400).send({ success: false, message: "Confirm Password does not match" });
      }

      //NOTE - Check if user already exists
     const user =  await userSchema.findOne({username:username}) || await userSchema.findOne({email:email}) ||  await userSchema.findOne({phone:phone});
     if(user){
      return res.status(400).send({ success: false, message: "User already exists" });
     }

      //NOTE - encrypt password
      const encryptedPassword = await getBcryptedPassword(password);
      
      
      //NOTE - create new user
      const newUser = new userSchema({
        username,
        phone,
        email,
        address,
        password:encryptedPassword,
        status: true,
      });

      //NOTE - save new data
      const data = await newUser.save();
      return res.send({ success: true, data, message: "Registered Successfully" });

    } catch (error) {
      console.error("Error While Registering ==> ", error);
      return res.send().status(500).send({ success: false, message: error.message });
    }
  }

  static loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    try {
      //NOTE - check user exists
      const user = await userSchema.findOne({ username });
      if (!user) {
        return res.json({success: false, message: "User not found" });
      }

      //NOTE - Compare password correct or not
      await comparePassword(password, user.password);

      //NOTE - send response
      return res.send({ success: true, data:user , message: "Login Successfully" });
      
    } catch (error) {
      console.error("Error While login ==> ", error);
      return res.status(500).send({ success: false, message: error.message });
    }
  } 
}


module.exports = { AuthController };
