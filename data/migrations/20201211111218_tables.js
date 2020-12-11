
exports.up = function(knex) {
    return knex.schema

    // Project table
        .createTable('projects', table => {
            table.increments('project_id')
                .primary()
            table.string('name', 128)
                .notNullable()
            table.string('description')
            table.boolean('completed')
                .defaultTo(0)
        })
    
    // Resource table
        .createTable('resources', table => {
            table.increments('resource_id')
                .primary()
            table.string('name', 128)
                .notNullable()
            table.string('description', 128)
        })

    // Task table
        .createTable('tasks', table => {
            table.increments()
                .primary()
            table.string('description')
                .notNullable()
            table.string('notes')
            table.boolean('completed')
                .defaultTo(0)
            table.integer('project_id')
            .unsigned().notNullable()
            .references('project_id').inTable('project')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        })
        .createTable('project_resources', table => {
            table.increments()
                .primary()
            table.integer('resource_id')
                .unsigned().notNullable()
                .references('resource_id').inTable('resource')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
            table.integer('project_id')
            .unsigned().notNullable()
            .references('project_id').inTable('project')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
