
exports.up = function(knex, Promise) {
    return knex.schema.createTable('skill_descriptions', function(table) {
        table.increments();
        table.integer('skill_id').notNullable().references('skills.id').onDelete('cascade');
        table.integer('level').notNullable().defaultTo(1);
        table.string('description').notNullable().defaultTo('');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('skill_descriptions');
};
