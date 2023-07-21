const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World',
    });
});

const IP = '0.0.0.0';
const PORT = 3333;

app.listen(PORT, IP, () => console.log(`Server is running at http://${IP}:${PORT}`));