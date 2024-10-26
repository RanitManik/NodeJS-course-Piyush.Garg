const {getUser} = require('../service/auth')

async function authenticate(req, res, next) {
  const userUID = req.cookies?.uid;

  if (!userUID) return res.redirect('/login');
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
