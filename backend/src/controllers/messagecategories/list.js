const repository = require("../../repositories/messagecategories");

async function handler(req, res, next) {
    try {
        let messageCategoriesResponse = await repository.list();
        res.send(messageCategoriesResponse);
    } catch (ex) {
        next(ex);
    }
}

module.exports = [handler];