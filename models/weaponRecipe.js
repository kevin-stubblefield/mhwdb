var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class WeaponRecipe extends Model {
    static get tableName() {
        return 'weapon_recipes';
    }

    static get relationMappings() {
        return {
            upgradeFrom: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/weapon',
                join: {
                    from: 'weapon_recipes.upgrade_from',
                    to: 'weapons.id'
                }
            },

            upgradeTo: {
                relation: Model.HasOneRelation,
                modelClass: __dirname + '/weapon',
                join: {
                    from: 'weapon_recipes.upgrade_to',
                    to: 'weapons.id'
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

module.exports = WeaponRecipe;