const express = require('express');
// const dotenv = require('dotenv').config();

const posts = require('./posts.json');

const app = express();

const PORT = 5500;

app.get('/', (req, res) => {
  res.send('Hello from the server!!!');
});

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));