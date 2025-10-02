const dotenv = require("dotenv");
dotenv.config(); // move this after importing dotenv

const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const path = require("path");

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

// CORS setup (only one)
app.use(cors({
  origin: 'http://localhost:3000, http://localhost:8000',  // your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  credentials: true
}));

// Example route
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
