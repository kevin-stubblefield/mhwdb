
exports.up = function(knex, Promise) {
    return knex.schema.createTable('monster_sizes', function(table) {
        table.increments();
        table.string('size').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('monster_sizes');
};
