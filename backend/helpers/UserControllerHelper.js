const User = require('../models/User');
const Joi = require('@hapi/joi');

const registerInputValidation = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(2).required(),
    email: Joi.string().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(user);
};

const loginValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(user);
};

const userExistCheck = async (username, email) => {
  const usernameExist = await User.findOne({ username: username });
  const emailExist = await User.findOne({ email: email });

  if (usernameExist && emailExist) {
    return { sucsess: true, msg: 'You are already registered ' };
  } else if (usernameExist) {
    return { sucsess: true, msg: 'Username is already taken' };
  } else if (emailExist) {
    return { sucsess: true, msg: 'Email is already registered' };
  } else {
    return { sucsess: false, msg: '' };
  }
};

module.exports.registerInputValidation = registerInputValidation;
module.exports.loginValidation = loginValidation;
module.exports.userExistCheck = userExistCheck;
