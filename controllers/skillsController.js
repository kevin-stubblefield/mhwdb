let db = require('../db');

module.exports = {
    getIndex: async function() {
        let skills = await db.skills.getAll();
        return skills;
    },

    getArmorWithSkills: async function(skills) {
        for (let key in skills) {
            let skill = skills[key];
            let parts = skill.split('-');
            let skillId = parseInt(parts[0]);
            let skillLevel = parseInt(parts[1]);
            console.log(`SKILL: ${skillId}, LEVEL: ${skillLevel}`);
        }
    }
}