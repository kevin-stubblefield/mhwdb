let controller = require('../controllers/skillsController');
let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    let index = await controller.getIndex();

    res.json(index);
});

router.get('/calculator', async (req, res) => {
    let data = await controller.getArmorWithSkills(req.query);

    res.json(data);
});

module.exports = router;