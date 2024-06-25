const mongoose = require("mongoose");

const { model, Schema } = require("mongoose");

const AuthorSchema = new Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Author", AuthorSchema);
