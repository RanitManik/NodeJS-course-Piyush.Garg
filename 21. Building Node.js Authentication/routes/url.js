const express = require('express');
const router = express.Router();

const {
    handleGenerateNewShortURL,
    handleRedirectNewShortURL,
    handleAnalyticsURL,
} = require('../controllers/url');

router.post('/home', handleGenerateNewShortURL);
router.get('/url/:shortID', handleRedirectNewShortURL);
router.get('/url/analytics/:shortID', handleAnalyticsURL);

module.exports = router;