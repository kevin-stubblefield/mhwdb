
exports.up = function(knex, Promise) {
    return knex.schema.createTable('monsters', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('rank').notNullable().defaultTo(0);
        table.integer('size').notNullable().defaultTo(0);
        table.integer('classification').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('monsters');
};
