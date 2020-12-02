const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const { body,validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log(`MongoDB connected...`);
  })
  .catch((error) => {
    console.log(error);
  });

const registrationRouter = require("./routes/registration");
// const loginRouter = require("./routes/login");

app.use("/registration", registrationRouter);
// app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
