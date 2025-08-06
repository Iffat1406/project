const dotenv = require("dotenv");
dotenv.config(); // move this after importing dotenv

const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

// CORS setup (only one)
app.use(cors({
  origin: 'http://localhost:3000', // your React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Example route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
