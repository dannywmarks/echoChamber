const express = require('express')
const { getEchos, createEcho, updateEcho, deleteEcho, likeEcho } = require('../controllers/echos')

const router = new express.Router();

router.get('/', getEchos)
router.post('/', createEcho)
router.patch('/:id', updateEcho)
router.delete('/:id', deleteEcho)
router.patch('/:id/likeEcho', likeEcho)

module.exports = router;