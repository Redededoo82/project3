const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
    post: { type: String, required: true }
  });

  const Comment = mongoose.model("Comment", commentSchema);

  module.exports = Comment;