const express = require('express');
const router = express.Router();
const { register, login, changeBanStatus, deleteUser } = require('../controllers/UserController');

router.post('/user/register', async (req, res) => {
  const mutedData = await register(req.body);
  res.send(mutedData);
});
router.post('/login', async (req, res) => {
  const mutedData = await login(req.body);
  res.send(mutedData);
});

router.post('/ban', async (req, res) => {
  const mutedData = await changeBanStatus(req.body);
  res.status(mutedData.status).send(mutedData.message);
});

router.delete('/', async (req, res) => {
  const mutedData = await deleteUser(req.body);
  res.status(mutedData.status).send(mutedData.message);
});

module.exports = router;
