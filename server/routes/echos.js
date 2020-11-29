const express = require('express')
const { getEchos, createEchos } = require('../controllers/echos')

const router = new express.Router();

router.get('/', getEchos)
router.get('/', createEchos)

module.exports = router;