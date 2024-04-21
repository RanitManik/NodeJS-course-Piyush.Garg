const express = require('express');
const router = express.Router();
const {handleGenerateNewShortURL, handleNewShortURL} = require('../controllers/url');

router.post('/', handleGenerateNewShortURL);

router.get('/:shortID', handleNewShortURL);

module.exports = router;