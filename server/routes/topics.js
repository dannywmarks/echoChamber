const express = require('express')
const { getTopics, createTopics } = require('../controllers/topics')

const router = new express.Router();

router.get('/', getTopics)
router.get('/', createTopics)

module.exports = router;