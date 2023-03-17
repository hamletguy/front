const mongoose = require("mongoose");
require("dotenv").config();
const BASE_URI = process.env.USER_BASE_URI;

const { default: mongoose } = require("mongoose");

const connect = async () => {
  await mongoose
    .connect(BASE_URI)
    .then(() => console.log("connected"))
    .catch((e) => console.log(e.message));
};
module.exports = connect;
