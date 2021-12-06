const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;