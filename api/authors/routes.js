const express = require("express");
const {
  getAllAuthors,
  getOneAuthor,
  createNewAuthor,
  updateAuthor,
  deleteAuthor,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const AuthorsRouter = express.Router();

AuthorsRouter.get("/", getAllAuthors);
AuthorsRouter.get("/:id", getOneAuthor);
AuthorsRouter.post("/", upload.single("image"), createNewAuthor);
AuthorsRouter.post("/", updateAuthor);
AuthorsRouter.delete("/", deleteAuthor);

module.exports = AuthorsRouter;
