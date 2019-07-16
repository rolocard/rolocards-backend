
exports.up = function(knex) {
  return knex.schema.createTable('personal_cards', function(table) {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('business_email').unique();
    table.string('twitter_url').unique();
    table.string('linkedin_url').unique();
    table.string('job_title');
    table.string('company_name');
    table.string('website_url');
    table.string('phone_number').unique();
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('personal_cards');
};
