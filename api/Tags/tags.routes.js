const express = require("express");

const upload = require("../../middlewares/multer");
const { getAllTags, createTag } = require("./tags.controllers");

const tagRouter = express.Router();

tagRouter.get("/", getAllTags);
tagRouter.post("/", upload.single("image"), createTag);
// tagRouter.post("/", updateTag);
// tagRouter.delete("/", deleteTag);

module.exports = tagRouter;
