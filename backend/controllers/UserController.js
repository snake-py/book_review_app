// import required models
const User = require('../models/User');

// Write controller
class UserController {
  async register(user) {
    const { username, email, password } = user;
    const newUser = new User({ username, email, password });
    newUser.save();
    return newUser;
  }
}

const examples = new UserController();
module.exports = examples;
