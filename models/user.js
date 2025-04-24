const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensures that usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the user model
const User = mongoose.model('User', userSchema);
module.exports = User;
