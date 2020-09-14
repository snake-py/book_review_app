const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;


server.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});
