
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()
// User Model
const User = require('../models/userLayout')


// @route GET /users
// @desc  Gets all users
// @access Public

const getUsers = async (req, res) => {
  try {
    const users =  await User.find()
    console.log(users)
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

// @route POST /users
// @desc  Register user
// @access Public

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }

  const { name, email, password } = req.body
  try {
    let user = await User.findOne({ email })

    if(user) {
      res.status(400).json({ errors: [{ msg: 'User Already Exists'}]})
    }

    //create instance of new user
    user = new User({
      name,
      email,
      password
    })

    // salt for encryption
    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    // save user
    await user.save()

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload, 
      process.env.JWTSECRET, 
      { expiresIn: 3600 },
      (err, token) => {
        if(err) throw err;
        res.json({ token, user: {
          id: user.id,
          name: user.name,
          email: user.email
        } })
      })
    
    
  } catch(err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
}

const updateUser = async (req, res) => {
  
}
const deleteUser = async (req, res) => {
  
}

module.exports = {getUsers, createUser, updateUser, deleteUser}



