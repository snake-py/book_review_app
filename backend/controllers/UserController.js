const { registerInputValidation, userExistCheck } = require('../helpers/UserControllerHelper');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Write controller
class UserController {
  async register(userToRegister) {
    const { username, email, password } = userToRegister;

    const { error } = registerInputValidation(userToRegister);
    if (error) return { success: false, msg: `ERROR: ${error.details[0].message}` };

    const userExist = await userExistCheck(username, email);
    if (userExist.sucsess) return { success: false, msg: `ERROR: ${userExist.msg}` };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username: username, email: email, password: hashPassword });
    try {
      await newUser.save();
      return { success: true, msg: `${newUser.username} was registered.` };
    } catch (error) {
      return { success: false, msg: `ERROR: ${error}` };
    }
  }

  async login(userToLogin) {
    // identifier can be username or email
    const { identifier, password } = userToLogin;


  }
}

const examples = new UserController();
module.exports = examples;
