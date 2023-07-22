require('dotenv/config');

const env = {
    NODE_ENV: process.env.NODE_ENV,
    HTTP_IP: process.env.HTTP_IP,
    HTTP_PORT: process.env.HTTP_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
};

module.exports = { env }