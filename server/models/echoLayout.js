const mongoose = require('mongoose')

const echoSchema = mongoose.Schema({
  creator: String,
  title: String,
  videoLink: String,
  channel: String,
  notes: String,
  selectedFile: String,
  tags: [String],
  likeCount: {
    type: Number, 
    default: 0
  }, 
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const EchoLayout = mongoose.model('EchoLayout', echoSchema )

module.exports = EchoLayout;