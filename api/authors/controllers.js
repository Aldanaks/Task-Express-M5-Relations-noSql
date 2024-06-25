const Author = require("../../models/Author");

const getAllAuthors = async (req, res, next) => {
  try {
    const author = await Author.find();
    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

const createNewAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    return res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    await Author.findByIdAndRemove({ _id: req.Author.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    await Author.findByIdAndUpdate(req.Author.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getOneAuthor = async (req, res, next) => {
  try {
    const Authors = await Author.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
  createNewAuthor,
  deleteAuthor,
  updateAuthor,
  getOneAuthor,
};
