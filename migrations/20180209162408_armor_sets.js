
exports.up = function(knex, Promise) {
    return knex.schema.createTable('armor_sets', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('').index();
        table.string('description').notNullable().defaultTo('');
        table.integer('rank').notNullable().defaultTo(0);
        table.integer('head').notNullable().defaultTo(1).references('armors.id').onDelete('cascade');
        table.integer('chest').notNullable().defaultTo(1).references('armors.id').onDelete('cascade');
        table.integer('hands').notNullable().defaultTo(1).references('armors.id').onDelete('cascade');
        table.integer('waist').notNullable().defaultTo(1).references('armors.id').onDelete('cascade');
        table.integer('legs').notNullable().defaultTo(1).references('armors.id').onDelete('cascade');
        table.string('set_bonus_name').notNullable().defaultTo('');
        table.integer('set_bonus_1_id').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('set_bonus_1_count').notNullable().defaultTo(0);
        table.integer('set_bonus_2_id').notNullable().defaultTo(1).references('skills.id').onDelete('cascade');
        table.integer('set_bonus_2_count').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('armor_sets');
};
