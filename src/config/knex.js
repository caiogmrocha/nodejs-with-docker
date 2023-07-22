const knex = require("knex");
const knexfile = require("../../knexfile");
const { env } = require("./env");

module.exports = {
    knex: knex(knexfile[env.NODE_ENV]),
};