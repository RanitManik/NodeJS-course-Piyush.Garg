const {getUser} = require('../service/auth')

async function restrictToLoggedInUsersOnly(req, res, next) {
  const userUID = req.headers["authorization"];
  if (!userUID) return res.redirect('/login');
  const token = userUID.split("Bearer ")[1];
  const user = getUser(token);
  if (!user) return res.redirect('/login');
  req.user = user;
  next();
}

async function checkAuthentication(req, res, next) {
  console.log(req.headers)
  const userUID = req.headers["authorization"];
  const token = userUID.split("Bearer ")[1];
  req.user = getUser(token);
  next();
}
module.exports = {restrictToLoggedInUsersOnly, checkAuthentication};