
const userSchema = require('../models/user');

const ifUserExists = async (user) => {
  try {
    const userExists = await userSchema.findOne(user);
    if (userExists) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = ifUserExists;
