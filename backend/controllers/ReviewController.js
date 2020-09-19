const mongoose = require('mongoose');
const Review = require('../models/Review');
const Book = require('../models/Book');
const {reviewValidation, updateAvgRatingAdd, updateAvgRatingDelete, upDateAvgRatingUpdate} = require('../helpers/ReviewControllerHelper');

class ReviewController{
    async addReview(inputReview){
        const {reviewTitle, rating, text,userId, bookId, 
        isbn, bookTitle,author,thumbnail,bookLikeSum,bookClickCounter,bookAverageRating}= inputReview;

        const reviewToAdd = {title: reviewTitle, rating: rating, text:text, user_id: userId, book_id: bookId};
        
        //check if review is valid
        const { error } = reviewValidation(reviewToAdd);
        if (error) return {status:400, success: false, msg: `ERROR: ${error.details[0].message}` };
        
        //check if book is found in database
        const bookExist= await Book.findOne({isbn: isbn });
        if(!bookExist){
            const newBook = new Book({isbn: isbn, title: bookTitle, author: author,
            thumbnail: thumbnail, like_sum: bookLikeSum, click_counter: bookClickCounter, average_rating: bookAverageRating});
            try {
              await newBook.save();
            }catch (error) {
              return { status:400, success: false, msg: `ERROR: ${error}` };
            }
        }

        //check if the user has already reviewed this book
        const isReviewed = await Review.findOne({user_id: userId, book_id: bookId});
        if(isReviewed){
            return {status: 200, success: false, msg: `The book with isbn ${isbn} is already reviewed by this user ${userId}`};
        }
        //add the review
        try{
            const result = await updateAvgRatingAdd(bookId, rating);
            const newReview =new Review({title: reviewTitle, rating: rating, text:text, user_id: userId, book_id: bookId});
            newReview.save();
            if(result.success){
                return {status: 200, success: true, msg: `The book with isbn ${isbn} is now reviewed by this user ${userId}. ${result.msg}`};
            }else{
                return {status: 400, success: false, msg: `ERROR: ${(await result).msg}`};
            }
           
        }catch(error){
            return {status: 400, success: false, msg: `ERROR: ${error}`};
        }
    }

    async getReviews(user){
        try{
          const reviewedBooks = await Review.find({user_id: user._id});
          return {status: 200, msg: `The user has reviewed ${reviewedBooks.length} books`, reviewedBooks: reviewedBooks};
        }catch(error){
          return  {status: 400, msg: `ERROR: ${error}`};
        }
    }

    async deleteReview(reviewToDelete){
        try {
            const review = await Review.findById(reviewToDelete._id);
            const didChangeRating = await updateAvgRatingDelete(reviewToDelete.book_id,reviewToDelete.rating);
            if(didChangeRating.success){
                await Review.deleteOne(review);
                return { status: 200, success: true, msg: `${review.title} was deleted. ${didChangeRating.msg}` };
            }else{
                return { status: 400, success: false, msg: `ERROR: ${didChangeRating.msg}`};
            }
            
        }catch (error) {
            return { status: 400, success: false, msg: `Review was not found. ${error}`};
        }
    }

    async updateReview(reviewToUpdate){
            const reviewFound = await Review.findById(reviewToUpdate._id);
            if(!reviewFound) return {status:400, success: false, msg: "Review was not found"};
            const {_id, title,rating,text,user_id,book_id} = reviewToUpdate;
            //validate the updated review
            const { error } = reviewValidation({title: title, rating: rating, textt:text, user_id: user_id, book_id: book_id});
            if (error) return {status:400, success: false, msg: `ERROR: ${error.details[0].message}` };
            const query = { "_id": _id };
            const updateRating = 
            { "$set": 
                    {"title": title,
                    "rating": rating ,
                    "text": text,
                    "user_id": user_id,
                    "book_id": book_id}};
            //const options = { "upsert": false };
            try{
                //update the rating of the book
                await upDateAvgRatingUpdate(reviewToUpdate.book_id,reviewFound.rating, rating);
                await Review.updateOne(query, updateRating);
                return {status: 200, success: true, msg: `The review with id ${_id} is updated`};
            }catch(error){
                return {status: 400, success: false, msg: `msg: ${error}`};
            }
    }
}

const reviewController = new ReviewController();
module.exports = reviewController;