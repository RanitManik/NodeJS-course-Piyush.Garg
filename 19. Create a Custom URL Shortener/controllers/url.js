const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).send({error: 'URL is missing'});
    }
    const shortID = shortid();
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({shortID: shortID});
}

async function handleNewShortURL(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID,
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        }
    });

    if (!entry || !entry.redirectURL) {
        return res.status(404).send({ error: 'URL not found' });
    }

    res.redirect(entry.redirectURL);
}


module.exports = {handleGenerateNewShortURL, handleNewShortURL};