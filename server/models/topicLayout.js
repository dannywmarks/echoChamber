const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({
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

const TopicLayout = mongoose.model('TopicLayout', topicSchema )

module.exports = TopicLayout;