require ('dotenv').config();
const express = require('express');
const {LEGAL_TCP_SOCKET_OPTIONS} = require ('mongoose');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.DB_URL);

const userRoute = require ('./routes/userRoute');
// const { route } = require('./routes/userRoute');
app.use ('/users',userRoute);
// user register


app.listen(process.env.PORT,() => {
    console.clear();
    console.log (`Project is running at port ${process.env.PORT}`);
});