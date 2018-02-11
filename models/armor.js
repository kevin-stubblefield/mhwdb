var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class Armor extends Model {
    static get tableName() {
        return 'armors';
    }
    
    static get relationMappings() {
        return {
            armorRecipe: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/armorRecipe',
                join: {
                    from: 'armor_recipes.armor_id',
                    to: 'armors.id'
                }
            },

            firstSkill: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/skill',
                join: {
                    from: 'armors.skill_1',
                    to: 'skills.id'
                }
            },

            secondSkill: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/skill',
                join: {
                    from: 'armors.skill_2',
                    to: 'skills.id'
                }
            },
        };
    }
    
    $formatDatabaseJson(json) {
        json = super.$formatDatabaseJson(json);

        return _.mapKeys(json, (value, key) => {
            return snakeCase(key);
        });
    }

    $parseDatabaseJson(json) {
        json = _.mapKeys(json, (value, key) => {
            return camelCase(key);
        });

        return super.$parseDatabaseJson(json);
    }
}

module.exports = Armor;