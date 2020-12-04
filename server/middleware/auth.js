const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()


module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token')

  // Check if no token
  if(!token) {
    return res.status(401).json({ msg: 'No token, auth denied'})
  }

  //verify token
  try {
    const decode = jwt.verify(token, process.env.JWTSECRET)
    req.user = decode.user
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid'})
  }
}