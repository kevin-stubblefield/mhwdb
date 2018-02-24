
exports.up = function(knex, Promise) {
    return knex.schema.createTable('charms', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('rarity').notNullable().defaultTo(1);
        table.integer('piece').notNullable().defaultTo(5);
        table.integer('max_level').notNullable().defaultTo(1);
        table.integer('skill_1').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('skill_2').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('charms');
};
