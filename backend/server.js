const express = require('express');
const mongoose = require('mongoose');
const user_router = require('./routes/UserAPI');
const book_router = require('./routes/BookAPI');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;
server.use(express.json());

const uri = process.env.DB_CONNECT;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('DB Connection is established');
});

server.use('/user', user_router);
server.use('/books', book_router);

server.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
