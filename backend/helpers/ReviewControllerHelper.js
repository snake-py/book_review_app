const Review = require('../models/Review');
const Book = require('../models/Book');
const Joi = require('@hapi/joi');

const reviewValidation = (review) => {
    const schema = Joi.object({
        title: Joi.string().max(60).required(),
        rating: Joi.number().min(1).max(10).required(),
        text: Joi.string().min(6).required(),
        user_id: Joi.required(), 
        book_id: Joi.required(),
    });
    return schema.validate(review);
  };
  
const updateAvgRatingAdd = async (bookId, ratingByUser)=>{
    const bookFound = await Book.findById(bookId);
    const oldAverageRating = bookFound.average_rating;
    const allReviews = await Review.find({book_id: bookId});
    const nrOfReviews = allReviews.length;
    const totalRating = nrOfReviews * oldAverageRating;
    const newAverageReview = Math.floor((totalRating + ratingByUser)/(nrOfReviews+1));
    const query = { "_id": bookId };
    const updateRating = { "$set": { "average_rating": newAverageReview}};
    //const options = { "upsert": false };
    try{
        await Book.updateOne(query, updateRating);
        return {success: true, msg: `Updated the average rating ${newAverageReview}`};
    }catch(error){
        return {success: false, msg: `msg: ${error}`};
    }
}

const updateAvgRatingDelete = async (bookId,ratingByUser)=>{
    const bookFound = await Book.findById(bookId);
    const avgRatingOld = (await bookFound).average_rating;
    const allReviews = await Review.find({book_id: bookId});
    const nrOfReviews = allReviews.length;
    const totalRating = nrOfReviews * avgRatingOld;
    let newAverageReview;
    if(nrOfReviews >1){ 
        newAverageReview = Math.floor((totalRating - ratingByUser)/(nrOfReviews-1));
    }else{
        newAverageReview=1;
    }
    const query = { "_id": bookId };
    const updateRating = { "$set": { "average_rating": newAverageReview}};
    //const options = { "upsert": false };
    try{
        await Book.updateOne(query, updateRating);
        return {success: true, msg: `Updated the average rating: ${newAverageReview}`};
    }catch(error){
        return {success: false, msg: `msg: ${error}`};
    }
}

module.exports.reviewValidation = reviewValidation;
module.exports.updateAvgRatingAdd = updateAvgRatingAdd;
module.exports.updateAvgRatingDelete = updateAvgRatingDelete;
