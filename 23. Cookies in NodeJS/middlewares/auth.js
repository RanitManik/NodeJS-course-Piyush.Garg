const {getUser} = require('../service/auth')

async function authenticate(req, res, next) {
  const userUID = req.headers["Authorization"];

  if (!userUID) return res.redirect('/login');
  // UserUID => "Bearer 12134da6d4wa6d4w6ad"
  const token = userUID.split("Bearer ")[1];
  const user = getUser(userUID);

  if (!user) return res.redirect('/login');

  req.user = user;
  next();
}

async function checkAuthentication(req, res, next) {
  const userUID = req.cookies?.uid;
  req.user = getUser(userUID);
  next();
}
module.exports = {authenticate, checkAuthentication};