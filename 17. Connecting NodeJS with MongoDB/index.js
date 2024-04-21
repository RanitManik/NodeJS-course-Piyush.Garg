const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// connect mongoose and MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/user-database").then(() => console.log("Connected to MongoDB")).catch(err => console.error("Mongoose Error:\n", err));

// Mongoose Schema
const userSchema = mongoose.Schema({
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        jobTitle: {
            type: String,
        },
        gender: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

// Mongoose Model
const User = mongoose.model("user", userSchema);

// Middleware
app.use(express.urlencoded({extended: false}));

// POST route
app.post('/api/users/', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json("All fields are required");
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender,
    });

    console.log(result);
    return res.status(201).json({status: 'success'});
});

// GET route for finding all users in html =>
app.get('/users', async (req, res) => {
    const allUsers = await User.find({});
    const html =
        `<ul>${allUsers.map((user) => `<li>${user.first_name} - ${user.email} - ${user.jobTitle} - ${user.gender}</li>`).join("")}</ul>`;
    res.send(html);
});


// GET api route for finding all users =>
app.get('/api/users', async (req, res) => {
    const allUsers = await User.find({});
    return res.json(allUsers);
});

/*
// GET api route for finding a specific user =>
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({error: 'User not found'});
    }
    return res.json(user);
});

// GET api route for patching a specific user =>
app.patch('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.query, {new: true});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
});

// GET api route for deleting a specific user =>
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
});
*/

app.use('/api/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        let user;
        switch (req.method) {
            case 'GET':
                user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({error: 'User not found'});
                }
                return res.json(user);
            case 'PATCH':
                user = await User.findByIdAndUpdate(userId, req.query, {new: true});
                if (!user) {
                    return res.status(404).json({error: 'User not found'});
                }
                return res.json(user);
            case 'DELETE':
                user = await User.findByIdAndDelete(userId);
                if (!user) {
                    return res.status(404).json({error: 'User not found'});
                }
                return res.json({message: 'User deleted successfully'});
            default:
                return res.status(405).json({error: 'Method Not Allowed'});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
