const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).send({error: 'URL is missing'});
  }
  const shortID = shortid();
  const allURLs = await URL.find({createdBy: req.user._id});
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  delete req.body.url;
  return res.render("index", {
    id: shortID,
    urls: allURLs,
  })
}

async function handleRedirectNewShortURL(req, res) {
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
    return res.status(404).send({error: 'URL not found'});
  }

  res.redirect(entry.redirectURL);
}

async function handleAnalyticsURL(req, res) {
  const shortID = req.params.shortID;
  const result = await URL.findOne({shortID});
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory
  });
}


module.exports = {
  handleGenerateNewShortURL,
  handleRedirectNewShortURL,
  handleAnalyticsURL,
};