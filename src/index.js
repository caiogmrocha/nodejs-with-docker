const express = require('express');
const { env } = require('./config/env');
const knex = require("./config/knex")

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World',
    });
});

app.listen(env.HTTP_PORT, env.HTTP_IP, () => console.log(`Server is running at http://${env.HTTP_IP}:${env.HTTP_PORT}`));