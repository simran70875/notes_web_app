const bcrypt = require("bcrypt");

const getBcryptedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, bcryptedPassword) => {
  try {
    const isPasswordCorrect = await bcrypt.compare(password, bcryptedPassword);
    if (!isPasswordCorrect) {
      throw new Error("Invalid Password!");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBcryptedPassword,
  comparePassword,
};
