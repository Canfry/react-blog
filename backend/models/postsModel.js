const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    author: {
      type: String,
      required: [true, 'Please add an author'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Posts', postSchema);
