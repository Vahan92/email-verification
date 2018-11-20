const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    roles: [{ type: 'String' }],
    isVerified: { type: Boolean, default: false },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date
  });

  userSchema.methods.comparePassword = function(password, cb) {
    cb(null, this.password === password);
  };

const User = mongoose.model('user', userSchema);

module.exports = User;