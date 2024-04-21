const URL = require('../models/url');
const router = require("./url");

router.get('/', async (req, res) => {
    const allURLs = await URL.find({});
    res.render('index', {
        urls: allURLs,
    });
});

module.exports = router;