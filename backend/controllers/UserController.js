const { registerValidation } = require('../helpers/UserControllerHelper');
const User = require('../models/User');
const {registerValidator, loginValidator} = require('../helpers/UserControllerHelper')

// Write controller
class UserController {
  async register(userToRegister) {
    const {error} = registerValidation(userToRegister)
    if(error) return {success: false, msg: error.details[0].message}
    const { username, email, password } = userToRegister;
    const newUser = new User({ username, email, password });
    
    


    newUser.save()
  }
}

const examples = new UserController();
module.exports = examples;
