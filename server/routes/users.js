const express = require('express')
const { getUsers, createUser, updateUser, deleteUser} = require('../controllers/users')

const router = new express.Router();

router.get('/', getUsers)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router;