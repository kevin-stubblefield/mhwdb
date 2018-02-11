var Model = require('../dbConfig').Model;
var _ = require('lodash');

const snakeCase = _.memoize(_.snakeCase);
const camelCase = _.memoize(_.camelCase);

class ArmorRecipe extends Model {
    static get tableName() {
        return 'armor_recipes';
    }

    static get relationMappings() {
        return {
            armor: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + '/armor',
                join: {
                    from: 'armors.id',
                    to: 'armor_recipes.armor_id'
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

module.exports = ArmorRecipe;