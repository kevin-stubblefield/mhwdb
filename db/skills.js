let models = require('../models');

let Skill = models.Skill;

module.exports = {
    getAll: function() {
        return Skill.query().eager('descriptions').where('id', '!=', 1);
    }
}