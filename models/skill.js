var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class Skill extends Model {
    static get tableName() {
        return 'skills';
    }

    static get relationMappings() {
        return {
            descriptions: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + '/skillDescription',
                join: {
                    from: 'skills.id',
                    to: 'skill_descriptions.skill_id'
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

module.exports = Skill;