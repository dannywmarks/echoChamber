const TopicLayout = require('../models/topicLayout')

const getTopics = async (req, res, next) => {
  try {
    const topicLayouts =  await TopicLayout.find()
    console.log(topicLayouts)
    res.status(200).json(topicLayouts)
  } catch (err) {
    res.status(404).json({ message: error.message })
  }
}

const createTopics = (req, res) => {
  res.send('Post Creation');
}

module.exports = {getTopics, createTopics}