var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class SkillDescription extends Model {
    static get tableName() {
        return 'skill_descriptions';
    }

    static get relationMappings() {
        return {
            skill: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/skill',
                join: {
                    from: 'skill_descriptions.skill_id',
                    to: 'skills.id'
                }
            }
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

module.exports = SkillDescription;