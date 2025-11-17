const cors = require("cors");

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8000'], // allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma",
  ],
  credentials: true,
};

module.exports = cors(corsOptions);
