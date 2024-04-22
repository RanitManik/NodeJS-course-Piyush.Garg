const URL = require('../models/url');
const router = require("./url");

router.get('/home', async (req, res) => {
    const allURLs = await URL.find({});
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