const express = require('express');
const router = express.Router();
const {
    handleGenerateNewShortURL,
    handleRedirectNewShortURL,
    handleAnalyticsURL
} = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);
router.get('/:shortID', handleRedirectNewShortURL);
router.get('/analytics/:shortID', handleAnalyticsURL);

module.exports = router;