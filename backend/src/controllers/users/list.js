const repository = require("../../repositories/users");

async function handler(req, res, next) {
    try {
        let usersResponse = await repository.list();
        res.send(usersResponse);
    } catch (ex) {
        next(ex);
    }
}

module.exports = [handler];