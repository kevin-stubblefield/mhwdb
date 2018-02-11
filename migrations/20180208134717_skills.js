
exports.up = function(knex, Promise) {
    return knex.schema.createTable('skills', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('description').notNullable().defaultTo('');
        table.integer('number_of_levels').notNullable().defaultTo(1);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('skills');
};
