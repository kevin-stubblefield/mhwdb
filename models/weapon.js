var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class Weapon extends Model {
    static get tableName() {
        return 'weapons';
    }

    static get relationMappings() {
        return {
            upgradedFrom: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/weapon',
                join: {
                    from: 'weapons.upgrade_from',
                    to: 'weapons.id'
                }
            },

            upgrades: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + '/weapon',
                join: {
                    from: 'weapons.id',
                    to: 'weapons.upgrade_from'
                }
            }
        }
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

module.exports = Weapon;