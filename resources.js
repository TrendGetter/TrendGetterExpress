const router = require('express').Router();

// router.use('/', require('./controllers/trends'));
router.use('/googleApi', require('./controllers/googleApi'));
router.use('/wikiApi', require('./controllers/wikiApi'));
router.use('/redditApi', require('./controllers/redditApi'));
router.use('/youtubeApi', require('./controllers/youtubeApi'));



module.exports = router;
