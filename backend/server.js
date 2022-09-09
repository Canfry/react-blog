const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv').config();
const router = require('./routes/postsRoute');

const app = express();

const PORT = 5500;

app.use(cors());

// Middleware to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', require('./routes/postsRoute'));

app.get('/', (req, res) => {
  res.send('Hello from the server!!!');
});

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
