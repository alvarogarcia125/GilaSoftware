const mongoose = require('mongoose');
const schema = mongoose.Schema;
const users = require('./users');

const logsSchema = schema({
    subscriber: users.usersSchema,
    createdat: Date,
    category: String,
    notificationtype: String,
    message: String
});

const logs = mongoose.model('logs', logsSchema)

module.exports = logs;