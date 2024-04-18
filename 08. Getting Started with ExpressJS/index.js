const express = require('express');
const http = require('http');

const app = express(); // This is the handler function

app.get('/', (req, res) => {
    return res.send('Welcome to ExpressJS');
});
app.get('/about', (req, res) => {
    return res.send('I am Ranit Manik');
});
app.get('/contact', (req, res) => {
    return res.send('ranitmanik.dev@gmail.com');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

/*
const myServer = http.createServer(app);
myServer.listen(3000, () => console.log("Server is running on port 3000"));
*/
