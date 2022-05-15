const router = require('express').Router();

router.use('/', require('./GET'));
router.use('/api', require('./api'));

module.exports = router;