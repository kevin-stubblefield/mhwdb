var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class Charm extends Model {
    static get tableName() {
        return 'charms';
    }
    
    static get relationMappings() {
        return {
            firstSkill: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/skill',
                join: {
                    from: 'charms.skill_1',
                    to: 'skills.id'
                }
            },

            secondSkill: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/skill',
                join: {
                    from: 'charms.skill_2',
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

module.exports = Charm;