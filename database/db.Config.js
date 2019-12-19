const knex = require("knex");

const knexConfiq = require("../knexfile");

module.exports = knex(knexConfiq.development);
