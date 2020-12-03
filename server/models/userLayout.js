const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

const EchoLayout = mongoose.model('user', userSchema )

module.exports = EchoLayout;