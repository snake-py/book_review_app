const express = require('express');
const router = express.Router();
const {example} = require('../controllers/exampleController');

router.post('/example', async (req, res) => {
    const mutedData = await example(req.body.data)
    res.send(mutedData)
})

module.exports = router;
