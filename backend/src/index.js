const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

const cors = require("cors");
app.use(cors());

const connectDB = require("./config/dbConnection");
const router = require("./routes/router");

dotenv.config();
connectDB();

app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use('/', router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

