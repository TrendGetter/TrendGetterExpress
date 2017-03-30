const router          = require('express').Router();
const controller      = require('./controller');

// console.log("zzzzzzzzzzz");
router.get('/', controller.getWikiResults);

module.exports = router;
