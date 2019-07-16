
exports.up = function(knex) {
  return knex.schema.createTable('connections', function(table) {
    table.increments();
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
    table.integer('user_a').notNullable().references('id').inTable('users');
    table.integer('user_b').notNullable().references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('connections');
};
