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

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mentor-student-db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
