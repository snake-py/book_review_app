const express = require('express');
const router = express.Router();
const { addReview, getReviews, deleteReview, updateReview} = require('../controllers/ReviewController');

//write a book review
router.post('/add', async(req, res)=>{
    const mutedData = await addReview(req.body);
    res.status(mutedData.status).send(mutedData.msg);
});
//see all the books reviewed by a user
router.get('/get', async(req, res)=>{
    const mutedData = await getReviews(req.body);
    res.status(mutedData.status).send(mutedData.msg);
});
//delete a review
router.delete('/', async(req, res)=>{
    const mutedData = await deleteReview(req.body);
    res.status(mutedData.status).send(mutedData.msg);
});
//update a review
router.post('/update', async(req, res)=>{
    const mutedData= await updateReview(req.body);
    res.status(mutedData.status).send(mutedData.msg);
});

module.exports = router;
