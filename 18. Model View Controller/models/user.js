const mongoose = require('mongoose');

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
);

// Mongoose Model => user model =>
const User = mongoose.model("user", userSchema);

module.exports = User;