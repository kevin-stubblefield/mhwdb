
exports.up = function(knex, Promise) {
    return knex.schema.createTable('monster_classifications', function(table) {
        table.increments();
        table.string('classification').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('monster_classifications');
};
