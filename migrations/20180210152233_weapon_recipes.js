
exports.up = function(knex, Promise) {
    return knex.schema.createTable('weapon_recipes', function(table) {
        table.increments();
        table.integer('weapon_id').notNullable().index().defaultTo(1).references('weapons.id');
        table.integer('material_1').notNullable().defaultTo(1).references('items.id');
        table.integer('material_1_quantity').notNullable().defaultTo(0);
        table.integer('material_2').notNullable().defaultTo(1).references('items.id');
        table.integer('material_2_quantity').notNullable().defaultTo(0);
        table.integer('material_3').notNullable().defaultTo(1).references('items.id');
        table.integer('material_3_quantity').notNullable().defaultTo(0);
        table.integer('material_4').notNullable().defaultTo(1).references('items.id');
        table.integer('material_4_quantity').notNullable().defaultTo(0);
        table.integer('cost').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('weapon_recipes');
};
