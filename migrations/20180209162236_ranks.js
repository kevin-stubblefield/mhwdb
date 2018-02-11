
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ranks', function(table) {
        table.increments();
        table.string('rank').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ranks');
};
