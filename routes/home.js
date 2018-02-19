let express = require('express');
let router = express.Router();
let db = require('../db');

router.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: './' });
});

module.exports = router;