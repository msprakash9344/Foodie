const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config()


const UserModal = require("./models/User");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// REGISTER

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // In a real application, you should hash the password before storing it

    // Check whether email already exists
    const existingUser = await UserModal.findOne({ email });

    if (existingUser) {
      return res.json({
        status: "error",
        message: "Email is already registered",
      });
    }

    // Create new user
    await UserModal.create({
      name,
      email,
      password : hashedPassword,
    });

    return res.json({
      status: "success",
      message: "Registration successful",
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
});




// LOGIN

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user using email
    const user = await UserModal.findOne({ email });

    // 2. Email doesn't exist
    if (!user) {
      return res.json({
        status: "error",
        message: "Account does not exist",
      });
    }

    // 3. Email exists but password is wrong
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        status: "error",
        message: "Incorrect password",
      });
    }

    // 4. Both email and password are correct

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({
      status: "success",
      message: "Successfully logged in",
      token,
    });


  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
});

// START SERVER

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
