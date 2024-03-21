const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGO_URL);

async function databaseConnection(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected!!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = databaseConnection;
