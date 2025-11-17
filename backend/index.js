const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const corsMiddleware = require("./config/cors");

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware); // ✅ Use the modularized CORS setup

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // or "../frontend/build" if CRA

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html")); // CRA: ../frontend/build
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
