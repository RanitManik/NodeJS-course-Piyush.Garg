const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
const secret = "ranitmanik";

function setUser(user) {
  return jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role,
  }, secret);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return res.status(401).json({error: 'Unauthorized'});
  }
}

module.exports = {
  setUser,
  getUser
};