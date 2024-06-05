const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { initDb } = require('./models');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Initialize database
initDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
