const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to database ${mongoose.connection.host}`.bgCyan.black
    );
  } catch (err) {
    console.log(`MongoDB error ${err}`.bgRed.white);
  }
};

module.exports = { connectDB };
