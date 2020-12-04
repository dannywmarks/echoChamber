const express = require('express')
const { getUsers, createUser, updateUser, deleteUser} = require('../controllers/users')
const {check} = require('express-validator')

const router = new express.Router();
// Gets all users
router.get('/', getUsers)
// Creates users and validates express
router.post('/',
 [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password','please enter a password with 6 or more characters').isLength({ min: 6 })
], 
createUser
)
// Updates user
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router;