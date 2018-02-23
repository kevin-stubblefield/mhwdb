let Armor = require('../models').Armor;

module.exports = {
    getAll: function() {
        return Armor.query().eager('[firstSkill, secondSkill]').orderBy('rank', 'desc').orderBy('skill_1_points', 'desc').orderBy('skill_2_points', 'desc');
    }
}