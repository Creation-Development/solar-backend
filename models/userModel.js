const mongoose = require('mongoose');

const User = mongoose.Schema({
    email: {
        type: String,
        index: true,
        default: null,
    },
    phone: {
        type: Number,
        index: true,
        default: null,
    },
    pass: {
        type: String,
        index: true,
        default: null,
    }
}, { timestamps: true })


module.exports = mongoose.model("Users", User)