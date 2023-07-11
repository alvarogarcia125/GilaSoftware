const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usersSchema = schema({
    name: String,
    email: String,
    phone: String,
    channels: Array,
    subscribed: Array
});

const users = mongoose.model('users', usersSchema)

module.exports = { 
    users, 
    usersSchema 
};