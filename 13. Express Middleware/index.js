const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require("node:fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({extended: false}));
/*
this line prepares your Express application to handle form data sent from HTML forms in POST requests by parsing the URL-encoded data and making it available in `req.body` for further processing in your route handlers.
*/

app.use((req, res, next) => {
    req.username = req.params.username || "friend";
    next();
});

app.use((req, res, next) => {
    console.log(`Hello ${req.username} from Middleware`);
    next();
});

app.use((req, res, next) => {
    fs.appendFile('./log.txt', `\n id=> ${Date.now()} :: method=> ${req.method} :: path=> ${req.path}`, (err) => {
        if (err) {
            throw err;
        }
        next();
    })
});

// Routes =>
app.get('/users', (req, res) => {
    console.log(`${req.myUsername} in GET route`);
    const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`
    res.send(html);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});


app.post('/api/users/', (req, res) => {
    const body = req.body;
    users.push({id: users.length + 1, ...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) throw err;
    });
    return res.json({status: 'success', id: users.length});
});

app.patch('/api/users/patch', (req, res) => {
    const queryParams = req.query;
    const userId = parseInt(queryParams.id);
    if (!userId) {
        return res.status(400).json({error: 'User ID is required in the query parameters'});
    }
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({error: 'User not found'});
    }
    users[userIndex] = {...users[userIndex], ...queryParams};
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }
        return res.json({status: 'success', id: userId});
    });
});


app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // Parse ID from request params
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({error: 'User not found'});
    }
    users.splice(userIndex, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }
        return res.json({status: 'success', id: userId});
    });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
