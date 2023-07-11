const config = require('./../config');
const mongo = require('./helpers/mongo');
const NODE_ENV = config.env;
const PORT = config.server.port;

mongo.connect().then((res) => {
    if (res) {
        //Express Server
        const app = require('./app');
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT} running ${NODE_ENV} environment`);

            if (mongo.isConnected()) {
                console.log(`Mongo isConnected:${mongo.isConnected()} on ${NODE_ENV} environment`);
            }
        });
    }
}).catch(err => {
    console.log(err);
});