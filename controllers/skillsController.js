let db = require('../db');

module.exports = {
    getIndex: async function() {
        let skills = await db.skills.getAll();
        return skills;
    }
}