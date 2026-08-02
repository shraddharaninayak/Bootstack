const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const serviceRoutes = require("./routes/serviceRoutes");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Bootstack Backend is Running Successfully!");
});

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});