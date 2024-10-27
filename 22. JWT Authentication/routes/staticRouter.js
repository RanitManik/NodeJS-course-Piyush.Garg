const URL = require('../models/url');
const router = require("./url");

router.get('/home', async (req, res) => {
  if (!req.user) {
    res.redirect('/login');
  }
  const URLsCreatedByUser = await URL.find({createdBy: req.user?._id});
  res.render('index', {
    urls: URLsCreatedByUser,
  });
});

router.get('/', (req, res) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    res.redirect('/home');
  }
});

router.get('/signup', async (req, res) => {
  if (!req.user) {
    return res.render('signup');
  } else {
    res.redirect('/home');
  }
});

router.get('/login', async (req, res) => {
  if (!req.user) {
    return res.render('login');
  } else {
    res.redirect('/home');
  }
});


module.exports = router;