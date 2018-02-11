
exports.up = function(knex, Promise) {
    return knex.schema.createTable('weapons', function(table) {
        table.increments();
        table.string('type').notNullable().index();
        table.string('name').notNullable();
        table.string('tree').notNullable().index();
        table.string('description').notNullable().defaultTo('');
        table.integer('attack').notNullable().defaultTo(0);
        table.string('element_1').notNullable().defaultTo('');
        table.integer('element_1_attack').notNullable().defaultTo(0);
        table.string('element_2').notNullable().defaultTo('');
        table.integer('element_2_attack').notNullable().defaultTo(0);
        table.integer('affinity').notNullable().defaultTo(0);
        table.string('sharpness').notNullable().defaultTo('Yellow/Yellow');
        table.integer('slot_1').notNullable().defaultTo(0);
        table.integer('slot_2').notNullable().defaultTo(0);
        table.integer('slot_3').notNullable().defaultTo(0);
        table.integer('defense').notNullable().defaultTo(0);
        table.integer('rarity').notNullable().defaultTo(1);
        table.integer('upgrade_from').notNullable().defaultTo(1).references('weapons.id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('weapons');
};
