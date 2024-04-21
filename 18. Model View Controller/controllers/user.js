const User = require("../models/user");

// controller functions =>
async function getAllUsers(req, res) {
    try {
        const allUsers = await User.find({});
        if (allUsers.length === 0) {
            return res.status(404).end("No users found.");
        }
        return res.json(allUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

async function createUser(req, res) {
    try {
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
        return res.status(201).json({status: 'success', id: result._id});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

async function getUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, req.query, {new: true});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        return res.json({message: 'User deleted successfully'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = {getAllUsers, createUser, getUser, updateUser, deleteUser};
