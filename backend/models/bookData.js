const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookDataSchema = new Schema(
  {
    month: { type: string, required: true },
    year: { type: string, required: true },
    best_books: [
      {
        book_id: { type: Schema.Types.ObjectId, ref: 'Book' },
        rating_average: { type: Number, required: true },
        favorit_sum: { type: Number, required: true },
        timestamps: true,
      },
    ],
  },
  { timestamps: true }
);

const BookData = mongoose.model(`BookData`, bookDataSchema);
module.exports = BookData;
