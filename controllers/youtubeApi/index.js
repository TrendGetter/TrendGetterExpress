const router          = require('express').Router();
const controller      = require('./controller');

router.get('/', controller.getYoutubeResults);

module.exports = router;
