// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env
const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.DB_URL, {
    await mongoose.connect(
      "mongodb+srv://yashansh15:sJa0JgP4a2HbvrkB@cluster0.gtux1ev.mongodb.net",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
