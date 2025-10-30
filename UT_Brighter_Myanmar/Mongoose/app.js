require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(process.env.DB_URL);

app.use(express.json());

// const { route } = require('./routes/userRoute');
const userRoute = require("./routes/userRoute");

// user register
app.use("/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
