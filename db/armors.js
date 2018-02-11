let Armor = require('../models').Armor;

module.exports = {
    getAll: function() {
        return Armor.query().eager('[armorRecipe, firstSkill.descriptions, secondSkill.descriptions]');
    }
}