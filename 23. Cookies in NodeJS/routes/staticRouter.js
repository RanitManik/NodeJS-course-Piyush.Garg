const URL = require('../models/url');
const router = require("./url");

router.get('/home', async (req, res) => {
  if (!req.user) return res.redirect('/login');
  const allURLs = await URL.find({ createdBy: req.user._id });
  res.render('index', {
    urls: allURLs,
  });
});

router.get('/', (req, res) => {
  res.redirect('signup');
});

router.get('/signup', async (req, res) => {
  const allURLs = await URL.find({});
  return res.render('signup', {
    urls: allURLs,
  });
});

router.get('/login', async (req, res) => {
  const allURLs = await URL.find({});
  return res.render('login', {
    urls: allURLs,
  });
});


module.exports = router;