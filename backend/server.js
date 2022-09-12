const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');

const app = express();
const PORT = 5500;

connectDB();

app.use(cors());

// Middleware to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', require('./routes/postsRoute'));

app.get('/', (req, res) => {
  res.send('Hello from the server!!!');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
