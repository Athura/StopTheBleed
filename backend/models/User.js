const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    location: {
        type: String
    },
    userType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})