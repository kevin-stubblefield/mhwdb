let controller = require('../controllers/skillsController');
let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    let index = await controller.getIndex();

    res.json(index);
});

module.exports = router;