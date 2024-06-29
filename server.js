const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes here
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Booking API');
});
app.use('/api/auth', require('./routes/auth'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
