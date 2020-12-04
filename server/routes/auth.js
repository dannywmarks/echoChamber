const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { authUser, loginUser } = require('../controllers/auth')
const {check} = require('express-validator')


router.get('/', auth, authUser)

router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('password','Password is required').exists()
], auth, loginUser)

module.exports = router