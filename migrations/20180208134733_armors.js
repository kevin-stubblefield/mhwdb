
exports.up = function(knex, Promise) {
    return knex.schema.createTable('armors', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('rank').notNullable().defaultTo(0);
        table.integer('piece').notNullable().defaultTo(0);
        table.integer('rarity').notNullable().defaultTo(1);
        table.integer('defense').notNullable().defaultTo(0);
        table.integer('fire_resistance').notNullable().defaultTo(0);
        table.integer('water_resistance').notNullable().defaultTo(0);
        table.integer('thunder_resistance').notNullable().defaultTo(0);
        table.integer('ice_resistance').notNullable().defaultTo(0);
        table.integer('dragon_resistance').notNullable().defaultTo(0);
        table.integer('slot_1').notNullable().defaultTo(0);
        table.integer('slot_2').notNullable().defaultTo(0);
        table.integer('slot_3').notNullable().defaultTo(0);
        table.integer('skill_1').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('skill_1_points').notNullable().defaultTo(0);
        table.integer('skill_2').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('skill_2_points').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('armors');
};
