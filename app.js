const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const AuthorsRouter = require("./api/authors/routes");
const morgan = require("morgan");
const cors = require("cors");
const tagRouter = require("./api/Tags/tags.routes");

connectDb();
app.use(express.json());

app.use("/posts", postsRoutes);
app.use("/authors", AuthorsRouter);
app.use("/tags", tagRouter);

// app.use(morgan("dev"));
app.use(cors());

// app.use(notFound);
// app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
