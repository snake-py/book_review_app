const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/UserController');

router.post('/user/register', async (req, res) => {
  const mutedData = await register(req.body);
  res.send(mutedData);
});
router.post('/user/login', async (req, res) => {
    const mutedData = await login(req.body);
    res.send(mutedData);
  });

module.exports = router;
