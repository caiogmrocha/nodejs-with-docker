const path = require("path");
const { env } = require("./src/config/env");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: env.DB_HOST,
      user: env.DB_USER,
      port: env.DB_PORT,
      password: env.DB_PASS,
      database: env.DB_NAME,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'config', 'migrations')
    },
  },
};
