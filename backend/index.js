import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Testing if server if working
app.get("/", (req, res) => {
  res.send("Server is working");
});

// SETTING UP THE SERVER AND DATABASE
async function main() {
  try {
    console.log("Connecting to MongoDB");
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@geia-interview.yn6vlqj.mongodb.net/geia-interview?retryWrites=true&w=majority&appName=geia-interview`
      //   {
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      //   }
    );
    console.log("Successfully connected to Database");
    // Declaring Port and Use of Server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

main();
