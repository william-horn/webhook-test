
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('Received home api request');
    res.json({ message: 'home api' });
});

module.exports = router;


