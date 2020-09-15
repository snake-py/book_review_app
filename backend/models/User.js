const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, min: 2, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, max: 1024 },
    hasVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
