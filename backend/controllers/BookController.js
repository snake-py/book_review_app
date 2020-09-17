const Book = require('../models/Book');
const mongoose = require('mongoose');

// Write controller
class BookController {
  async addBook(bookToAdd) {
    const { isbn, title, author, thumbnail } = bookToAdd;
    const bookExist = await Book.findOne({ isbn: isbn });
    if (bookExist) {
      return { status: 200, existing: true, success: true, msg: `The book with this isbn (${isbn}) is already in database` };
    }

    const newBook = new Book({ isbn: isbn, title: title, author: author, thumbnail: thumbnail });
    try {
      await newBook.save();
      return { status: 200, existing: false, success: true, msg: `The book with isbn ${newBook.isbn} is registered` };
    } catch (error) {
      return { status: 400, existing: false, success: false, msg: `ERROR: ${error}` };
    }
  }
}

const bookController = new BookController();
module.exports = bookController;
