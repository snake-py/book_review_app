const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        isbn: {type: Number},
        title: {type: String},
        heart_sum: {type: Number, default: 0},
        click_counter: {type: Number, default: 0},
        average_rating: {type: Number, max: 10, min: 1, default: 1},
    },
    {timestamps: true}
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;