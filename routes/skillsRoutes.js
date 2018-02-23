let controller = require('../controllers/skillsController');
let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    let index = await controller.getIndex();

    res.json(index);
});

router.get('/calculate', async (req, res) => {
    // let data = await controller.getArmorWithSkills(skills);

    // let data = await controller.getSkillArmorGraph(req.cache);
    let skills = [];
    if (typeof req.query.skill === 'string') {
        skills.push(req.query.skill);
    } else {
        skills = req.query.skill;
    }
    let data = await controller.calculateArmorWithDesiredSkills(skills, req.cache);

    res.json(data);
});

module.exports = router;