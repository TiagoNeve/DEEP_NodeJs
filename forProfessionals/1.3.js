const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá mundão'); // Já seta em UTF-8
});

app.listen(port, () => {
    console.log(`Server is running in http://localhost:3000`);
});