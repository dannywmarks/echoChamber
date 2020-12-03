const express = require('express');
const mongoose = require('mongoose');
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
// @desc  Registers
// @access Public

const createUser = async (req, res) => {
  const { name, email, password } = req.body
  
  // Simple validation
  if(!name || !email || !password) {
    return res.status(400).json({message: "please enter all fields"})
  }

  // Check for existing user 
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({message: "user already exists"})

      const newUser = new User({
        name,
        email,
        password
      });

      // Create Salt & Hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign({id: user.id},process.env.JWTSECRET,{expiresIn: 3600},
                  (err, token) => {
                    if (err) throw err;
                    res.json({
                      token,
                      user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                      }
                    })
                  }
              )
            })
        })
      })
    })
}
const updateUser = async (req, res) => {
  
}
const deleteUser = async (req, res) => {
  
}

module.exports = {getUsers, createUser, updateUser, deleteUser}