const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        title: {type: String, required, max: 60},
        rating: {type: Number, required, min: 1, max: 10},
        text: {type: String, text: true},
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        book_id: {type: Schema.Types.ObjectId, ref: 'Book'},

    }, { timestamps: true });


const Review = mongoose.mongoose.model('Review', reviewSchema);
module.exports = Review;