const asyncHandler = require('express-async-handler');

// const posts = require('../posts.json');

const Posts = require('../models/postsModel');

// const data = posts.posts;

// @desc    Get All Posts
// @method  GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Posts.find();
  res.status(200).json(posts);
});

// @desc    Get Single Post
// @method  GET /api/posts/:id
// @access  Private
const getPost = asyncHandler(async (req, res) => {
  // const data = posts.posts;
  const post = await Posts.findById(req.params.id);

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
  // const data = posts.posts;
  const title = req.body.title;
  const description = req.body.description;
  const author = req.body.author;
  // const timestamp = req.body.timestamp;
  // const newPost = req.body;

  if (!title || !description || !author) {
    res.status(400);
    throw new Error('Bad Request, fill out all fields');
  }
  const post = await Posts.create({ title, description, author });
  res.status(201).json(post);
});

// @desc    Update Post
// @method  PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  // const data = posts.posts;
  // const post = data.find((p) => p.id === req.params.id);
  const post = await Posts.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Not found');
  }

  const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedPost);
});

// @desc    Delete Post
// @method  DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  // const data = posts.posts;
  // const post = data.find((p) => p.id === req.params.id);
  const post = await Posts.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Not found');
  }
  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getPost, getPosts, createPost, updatePost, deletePost };
