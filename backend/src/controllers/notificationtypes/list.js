const repository = require("../../repositories/notificationtypes");

async function handler(req, res, next) {
    try {
        let notificationTypesResponse = await repository.list();
        res.send(notificationTypesResponse);
    } catch (ex) {
        next(ex);
    }
}

module.exports = [handler];