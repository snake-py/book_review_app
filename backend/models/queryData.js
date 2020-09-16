const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queryDataSchema = new Schema(
  {
    month: { type: string, required: true },
    year: { type: string, required: true },
    sum_searches: { type: Number },
    sum_users: { type: Number },
    sum_active_users: { type: Number },
    query: [
      {
        timestamps: true,
        search_phrase: { type: String, required: true },
        clicked_book: [{ isbn: { type: String }, book_id: { type: Schema.Types.ObjectId, ref: 'Book', required: false } }],
      },
    ],
  },
  { timestamps: true }
);

const QueryData = mongoose.model('QueryData', queryDataSchema);
module.exports = QueryData;
