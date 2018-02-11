let Weapon = require('../models').Weapon;

module.exports = {
    getPossibleUpgradesFor: function(weaponId) {
        return Weapon
            .query()
            .findOne('id', weaponId)
            .eager('upgrades');
    },

    getAll: function() {
        return Weapon.query().where('id', '!=', 1).where('upgrade_from', 1)
            .eager('upgrades.^');
    },

    getPreviousWeaponFor: function(weaponId) {
        return Weapon
            .query()
            .findOne('id', weaponId)
            .eager('upgradedFrom');
    },

    getTree: function(treeName) {
        return Weapon
            .query()
            .where('tree', treeName);
    }
}