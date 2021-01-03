const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  const env = dotenv.config();

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, auth denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
