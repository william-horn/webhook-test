const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('Received users api request');
    res.json({ message: 'users' });
});

module.exports = router;
