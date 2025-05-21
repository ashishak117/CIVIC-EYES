const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

// Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working! YEAHHHHHHHHHHHHHHHH BOIIIIIIIIIIIIIIIIIIIII' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI
, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
