const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api')

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;
server.use(express.json())

server.use('/', router)

server.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
