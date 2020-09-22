const express = require("express");
const router = express.Router();
const {
  addBook,
  getLikedBooks,
  likeBook,
} = require("../controllers/BookController");

//add a book to the database
router.post("/click", async (req, res) => {
  const mutedData = await addBook(req.body);
  res.status(mutedData.status).send(mutedData.msg);
});

//Routes for likes

//like a book(if not previously liked)
//unlike a book(if previously liked)
router.post("/like", async (req, res) => {
  const mutedData = await likeBook(req.body);
  res.status(mutedData.status).send(mutedData.msg);
});

//user gets all liked books
router.get("/liked", async (req, res) => {
  const mutedData = await getLikedBooks(req.body);
  res.status(mutedData.status).send(mutedData.msg);
});

module.exports = router;
