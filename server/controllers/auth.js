const User = require('../models/userLayout')
const { validationResult } = require('express-validator')
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// find user by id and return user

const authUser = async (req,res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('server error')
  }
}

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()})
  }

  const { email, password } = req.body
  try {
    let user = await User.findOne({ email })

    if(!user) {
      res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials'}]})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials'}]})
    }

 
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

module.exports = { authUser, loginUser }