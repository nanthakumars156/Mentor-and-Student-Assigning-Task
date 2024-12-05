const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/mentor', mentorRoutes);
app.use('/student', studentRoutes);


require('dotenv').config();
// Connect to MongoDB
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));


// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
