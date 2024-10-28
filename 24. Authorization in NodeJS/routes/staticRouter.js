const URL = require('../models/url');
const router = require("./url");
const {restrictTo} = require("../middlewares/auth");

// ADMIN Dashboard
router.get('/admin', restrictTo(["ADMIN"]), async (req, res) => {
  const allURLs = await URL.find({});
  res.render('index', {
    urls: allURLs,
  });
});

// NORMAL user Dashboard
router.get('/home', restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const URLsCreatedByUser = await URL.find({createdBy: req.user?._id});
  res.render('index', {
    urls: URLsCreatedByUser,
  });
});

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/signup', async (req, res) => {
  return res.render('signup');
});

router.get('/login', async (req, res) => {
  if (!req.user) {
    return res.render('login');
  } else {
    res.redirect('/home');
  }
});


module.exports = router;