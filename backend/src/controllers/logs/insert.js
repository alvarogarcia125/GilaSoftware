const repository = require("../../repositories/logs");

async function handler(req, res, next) {
    try {
        let data = req.body;
        let logsResponse = await repository.insert(data);
        res.send(logsResponse);
    } catch (ex) {
        next(ex);
    }
}

module.exports = [handler];