const express = require('express');
const router = express.Router();
const { addBook } = require('../controllers/BookController');

router.post('/add', async (req, res) => {
    const mutedData = await addBook(req.body);
    res.status(mutedData.status).send(mutedData.msg);
});

module.exports = router;