let Charm = require('../models').Charm;

module.exports = {
    getAll: function() {
        return Charm.query().eager('[firstSkill, secondSkill]');
    }
}