const mongoose = require('mongoose');
const Book = require('../models/Book');
const Like = require('../models/Like');
const { decrementLikeSum, incrementLikeSum, incrementClick} = require('../helpers/BookControllerHelper');


class BookController {
  async addBook(bookToAdd) {
    const { isbn, title, author, thumbnail } = bookToAdd;
    const bookExist = await Book.findOne({ isbn: isbn });
    if (bookExist) {
      try {
        const didIncrement = await incrementClick(isbn);
        if ((await didIncrement).success) {
          return {
            status: 200,
            existing: true,
            msg: `The book with this isbn (${isbn}) is already in database ${
              (await didIncrement).msg
            }`,
          };
        } else {
          return {
            status: 400,
            existing: true,
            msg: `The book with this isbn (${isbn}) is already in database. ${
              (await didIncrement).msg
            }`,
          };
        }
      } catch (error) {
        return { status: 400, existing: true, msg: `${error}` };
      }
    }

    const newBook = new Book({
      isbn: isbn,
      title: title,
      author: author,
      thumbnail: thumbnail,
    });
    try {
      await newBook.save();
      try {
        const didIncrement = await incrementClick(isbn);
        if ((await didIncrement).success) {
          return {
            status: 200,
            existing: false,
            msg: `The book with isbn ${newBook.isbn} is registered. ${
              (await didIncrement).msg
            }`,
          };
        } else {
          return {
            status: 400,
            existing: false,
            msg: `The book with isbn ${newBook.isbn} is registered. ${
              (await didIncrement).msg
            }`,
          };
        }
      } catch (error) {
        return {
          status: 400,
          existing: false,
          msg: `The book with isbn ${newBook.isbn} is registered. Error: ${error}`,
        };
      }
    } catch (error) {
      return { status: 400, existing: false, msg: `ERROR: ${error}` };
    }
  }

  async likeBook(newLike) {
    //check if the user liked the book previously
    const { user_id, book_id } = newLike;
    const likedPrev = await Like.findOne(newLike);
    //if like previously, then dislike
    //the corresponding like document will be removed from the database
    if (likedPrev) {
      try {
        await Like.deleteOne(newLike);
        const didDecrement = await decrementLikeSum(book_id);
        if ((await didDecrement).success) {
          return {
            status: 200,
            liked: false,
            msg: `Removed the like. ${(await didDecrement).msg}`,
          };
        } else {
          return {
            status: 400,
            liked: false,
            msg: `Like document removed. ${(await didDecrement).msg}`,
          };
        }
      } catch (error) {
        return {
          status: 400,
          liked: false,
          msg: `Delete failed with error: ${error}`,
        };
      }
      //if not liked previously, then like
      //create a new like document
    } else {
      const newLikeDoc = new Like({
        user_id: newLike.user_id,
        book_id: newLike.book_id,
      });
      try {
        await newLikeDoc.save();
        const didIncrement = await incrementLikeSum(book_id);
        if ((await didIncrement).success) {
          return {
            status: 200,
            liked: true,
            msg: `Liked. ${(await didIncrement).msg}`,
          };
        } else {
          return {
            status: 400,
            liked: false,
            msg: `Like document added. ${(await didIncrement).msg}`,
          };
        }
      } catch (error) {
        return { status: 400, liked: false, msg: `ERROR: ${error}` };
      }
    }
  }

  async getLikedBooks(user) {
    try {
      const likedBooks = await Like.find({ user_id: user.user_id });
      return {
        status: 200,
        msg: `The user has liked ${likedBooks} books`,
        likedBooks: likedBooks,
      };
    } catch (error) {
      return { status: 400, msg: `ERROR: ${error}` };
    }
  }
}

const bookController = new BookController();
module.exports = bookController;
