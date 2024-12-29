// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// require('dotenv').config();

// const feedbackRoutes = require('./routes/feedbackRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error: ', err));

// // API Routes
// app.use('/api/feedback', feedbackRoutes);

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  // Corrected logging here

const express = require("express");
const app = new express();
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Constants
const PORT = process.env.PORT || 4000;

// Database connection
const connection = require("./db/connection");

// Middleware
app.use(cors());

// Routes
const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
