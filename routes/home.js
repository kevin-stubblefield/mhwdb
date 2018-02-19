let express = require('express');
let router = express.Router();
let db = require('../db');

router.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: './' });
});

router.get('/paramTest', function(req, res) {
    res.json(req.query);
});

module.exports = router;