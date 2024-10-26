const User = require('../models/user');
const {setUser} = require('../service/auth')

async function handleUserSignUp(req, res) {
  const {
    name,
    email,
    password
  } = req.body;

  await User.create({
    name,
    email,
    password
  });
  return res.redirect('/home');
}

async function handleUserSignIn(req, res) {
  const {email, password} = req.body;
  const user = await User.findOne({email, password});
  if (!user) {
    return res.render('login', {
      error: 'Invalid username or password'
    });
  }
  const token = setUser(user);
  // res.cookie('uid', token);
  return res.json({token});
}

module.exports = {
  handleUserSignUp,
  handleUserSignIn
}