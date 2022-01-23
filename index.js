const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const allRouter = require("./routes/index");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.use(express.json())
app.use('/', allRouter);

app.listen(5000, () => {
  console.log("Life is awesome");
});
