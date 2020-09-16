const { registerInputValidation, userExistCheck, loginInputValidation, findUser, issueToken } = require('../helpers/UserControllerHelper');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

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
    const validatedInput = loginInputValidation(userToLogin);
    const { error } = validatedInput.validatedInput;
    if (error) return error.details[0].message;

    const user = await findUser(userToLogin);
    if (!user) return { success: false, message: 'We dont know this user! Do you want to register?' };
    // return user.password;

    const token = await issueToken(user, userToLogin);
    return token;
  }
}

const examples = new UserController();
module.exports = examples;
