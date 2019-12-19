exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user.increments();

    user.string("username").notNullable();
    user.string("password").notNullable();
    user.string("departments").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
