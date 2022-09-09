const express = require('express');
const router = express.Router();
const posts = require('../posts.json');
const { getPost } = require('../controllers/postsController');

router.get('/', (req, res) => {
  res.send(posts);
});

router.get('/:id', getPost);

module.exports = router;
