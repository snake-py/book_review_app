const Joi = require('@hapi/joi');

const registerValidation = (user) => {
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

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
