const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  bio: String,
  image: String,
  hash: String,
  salt: String
})

const User = mongoose.model('User', UserSchema);

module.exports = User;