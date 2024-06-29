const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  auhtor: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", PostSchema);
