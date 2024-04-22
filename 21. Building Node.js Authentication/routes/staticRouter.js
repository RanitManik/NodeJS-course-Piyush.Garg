const URL = require('../models/url');
const router = require("./url");

router.get('/', async (req, res) => {
    const allURLs = await URL.find({});
    res.render('index', {
        urls: allURLs,
    });
});

router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.get('/login', (req, res) => {
    return res.render('login');
});

module.exports = router;