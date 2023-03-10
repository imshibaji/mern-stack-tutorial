const mongoose = require('../config/mongodb');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    image: String,
    role: String
});

const user = mongoose.model('users', userSchema);

module.exports = user;