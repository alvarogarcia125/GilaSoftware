const mongoose = require('mongoose');
const schema = mongoose.Schema;

const notificationTypesSchema = schema({
    name: String
});

const notificationTypes = mongoose.model('notificationtypes', notificationTypesSchema)

module.exports = {
    notificationTypes, 
    notificationTypesSchema
};