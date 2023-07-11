const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageCategoriesSchema = schema({
    name: String
});

const messageCategories = mongoose.model('messagecategories', messageCategoriesSchema)

module.exports = { 
    messageCategories, 
    messageCategoriesSchema
};