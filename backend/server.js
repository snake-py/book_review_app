const express = require('express');
const mongoose = require('mongoose');
const user_router = require('./routes/UserAPI');
const book_router = require('./routes/BookAPI');
const review_router = require('./routes/ReviewAPI');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;
server.use(express.json());

const uri = process.env.DB_CONNECT;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('DB Connection is established');
});

server.use('/api/user', user_router);
server.use('/books', book_router);
server.use('/book/review', review_router);

server.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
