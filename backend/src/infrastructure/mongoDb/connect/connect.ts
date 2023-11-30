import mongoose from "mongoose";
const config = require("../../../config/config");


const connectMongoose = async () => {
  try {
    await mongoose.connect(config.mongodb);
  } catch (err) {
    console.log(err);
  }
};
export default connectMongoose;
