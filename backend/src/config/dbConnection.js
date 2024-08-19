const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
      console.log("database Conncted Successfully!");
    })
    .catch((err) => {
      console.error("database Conncted Successfully!", err);
    });
};


module.exports = connectDB;