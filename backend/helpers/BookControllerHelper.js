const Book = require('../models/Book');

const decrementLikeSum = async (id) => {
    const query = { "_id": id };
    const decrement = { "$inc": { "heart_sum": -1}};
    //const options = { "upsert": false };
    try{
        await Book.updateOne(query, decrement);
        return {success: true, msg: "Decremented the like_sum"};
    }catch(error){
        return {success: false, msg: `msg: ${error}`};
    }
};

const incrementLikeSum = async (id) => {
    const query = { "_id": id };
    const increment = { "$inc": { "heart_sum": 1}};
    //const options = { "upsert": false };
    try{
        await Book.updateOne(query, increment);
        return {success: true, msg: "Incremented the like_sum"};
    }catch(error){
        return {success: false, msg: `msg: ${error}`};
    }
};

const incrementClick = async (isbn) => {
    const query = { "isbn": isbn };
    const increment = { "$inc": { "click_counter": 1}};
    //const options = { "upsert": false };
    try{
        await Book.updateOne(query, increment);
        return {success: true, msg: "Incremented the click_counter"};
    }catch(error){
        return {success: false, msg: `msg: ${error}`};
    }
};

module.exports.decrementLikeSum = decrementLikeSum;
module.exports.incrementLikeSum = incrementLikeSum;
module.exports.incrementClick = incrementClick;