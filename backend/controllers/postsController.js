const asyncHandler = require('express-async-handler');
const posts = require('../posts.json');

const data = posts.posts;

// @desc    Get All Posts
// @method  GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  res.json(data);
});

// @desc    Get Single Post
// @method  GET /api/posts/:id
// @access  Public
const getPost = asyncHandler(async (req, res) => {
  const data = posts.posts;

  const post = data.find((p) => p.id === req.params.id);
  if (!post) {
    return res
      .status(404)
      .json({ message: `Post ID ${req.params.id} not found` });
  }
  res.json(post);
});

module.exports = { getPost, getPosts };
