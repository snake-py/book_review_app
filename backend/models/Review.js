const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        title: {type: String, required: true, max: 60},
        rating: {type: Number, required:true, min: 1, max: 10},
        text: {type: String, text: true},
        user_id: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
        book_id: {type: Schema.Types.ObjectId, required: true, ref: 'Book'},

    }, { timestamps: true });


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;