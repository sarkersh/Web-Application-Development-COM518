const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World from Express</h1>');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Worl!!!</h1>');
});

app.get('/time', (req, res) => {
    res.send('<h1>Hello World from Express</h1>');
});

app.listen(port);