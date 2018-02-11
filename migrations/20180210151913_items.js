
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('description').notNullable().defaultTo('');
        table.integer('dropped_by').notNullable().defaultTo(1).references('monsters.id').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items');
};
