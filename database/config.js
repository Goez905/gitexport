const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Connect to MONGO DB");
  } catch (error){
    console.log(error);
  }
};

module.exports = dbConnection; //export function dbConnection
