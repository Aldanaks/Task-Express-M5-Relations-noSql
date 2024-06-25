const notFound = (req, res, next) => {
  return res.status(404).json({ msg: "Path not found!" });
};

module.exports = notFound;
