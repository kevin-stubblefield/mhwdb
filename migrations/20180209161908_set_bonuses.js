
exports.up = function(knex, Promise) {
    return knex.schema.createTable('set_bonuses', function(table) {
        table.increments();
        table.integer('skill_1_id').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('skill_2_id').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.string('name').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('set_bonuses');
};
