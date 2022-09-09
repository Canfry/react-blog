const express = require('express');
const router = express.Router();
const posts = require('../posts.json');
const { getPost, getPosts } = require('../controllers/postsController');

router.get('/', getPosts);

router.get('/:id', getPost);

module.exports = router;
