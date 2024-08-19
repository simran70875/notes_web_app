
const userSchema = require('../models/user');

const ifUserExists = async (user) => {
  try {
    const userExists = await userSchema.findOne(user);
    if (userExists) {
      throw new Error("User Already Exists!");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = ifUserExists;
