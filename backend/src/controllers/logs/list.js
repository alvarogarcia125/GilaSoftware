const repository = require("../../repositories/logs");

async function handler(req, res, next) {
    try {
        let logsResponse = await repository.list();
        res.send(logsResponse);
    } catch (ex) {
        next(ex);
    }
}

module.exports = [handler];