const asyncHandler = require('express-async-handler');
const posts = require('../posts.json');

const getPost = asyncHandler(async (req, res) => {
  const data = posts.posts;
  data.map((post) => {
    if (!req.body.params === post.id) {
      res.send(404);
      throw new Error('Not found');
    }
    res.status(200).json(post);
  });
});

module.exports = { getPost };
