const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    //book_id: {type: Schema.Types.ObjectId, ref: 'Book'},
  },
  { timestamps: true }
);

const Like = mongoose.module('Like', likeSchema);
module.exports = Like;
