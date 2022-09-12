const asyncHandler = require('express-async-handler');
const posts = require('../posts.json');

const data = posts.posts;

// @desc    Get All Posts
// @method  GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  res.json(data);
});

// @desc    Get Single Post
// @method  GET /api/posts/:id
// @access  Private
const getPost = asyncHandler(async (req, res) => {
  const data = posts.posts;

  const post = data.find((p) => p.id === req.params.id);
  if (!post) {
    res.status(404);
    throw new Error(`Post ID ${req.params.id} not found`);
  }
  res.json(post);
});

// @desc    Create Post
// @method  POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const data = posts.posts;
  const title = req.body.title;
  const description = req.body.description;
  const author = req.body.author;
  const timestamp = req.body.timestamp;
  const newPost = req.body;

  if (!title || !description || !author || !timestamp) {
    res.status(400);
    throw new Error('Bad Request, fill out all fields');
  }
  data.push(newPost);
  res.status(201).json(data);
});

// @desc    Update Post
// @method  PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const data = posts.posts;

  const post = data.find((p) => p.id === req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Not found');
  }
  res.json(post);
});

// @desc    Delete Post
// @method  DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const data = posts.posts;

  const post = data.find((p) => p.id === req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Not found');
  }
  res.json(post);
});

module.exports = { getPost, getPosts, createPost, updatePost, deletePost };
