'use strict';

const mongoose = require('mongoose');
const config = require('./../../../config');
mongoose.Promise = global.Promise;

const getCredentials = () => {
    const {
        MONGO_HOST,
        MONGO_PORT,
        MONGO_DATABASE,
        MONGO_USER,
        MONGO_PASSWORD,
        MONGO_SSL,
        MONGO_AUTH_SOURCE,
        MONGO_REPLICASET
    } = config.db.mongo;

    const MONGO_URL = `mongodb://${MONGO_HOST}/${MONGO_DATABASE}`;

    return {
        MONGO_URL,
        MONGO_USER,
        MONGO_PASSWORD,
        MONGO_SSL,
        MONGO_AUTH_SOURCE,
        MONGO_REPLICASET
    };
};

const connect = async (settings) => {
    const mongoCredentials = helper.getCredentials();
    console.info(`Connecting to ${mongoCredentials.MONGO_URL}`);

    try {
        await mongoose.connect(mongoCredentials.MONGO_URL, {
            user: mongoCredentials.MONGO_USER,
            pass: mongoCredentials.MONGO_PASSWORD,
            replicaSet: mongoCredentials.MONGO_REPLICASET,     
            ssl: (mongoCredentials.MONGO_SSL === 1),  
            authSource: mongoCredentials.MONGO_AUTH_SOURCE,   
            reconnectTries: 30000,
            reconnectInterval: 1000,
            useNewUrlParser: true
        });

        console.info('Connected successfully to mongodb');

        const connection = mongoose.connection;
        connection.on('connecting', () => console.info('Connecting to mongodb'));
        connection.on('disconnecting', () => console.info('Disconnecting from mongodb'));
        connection.on('disconnected', () => console.info('Disconnected from mongodb'));
        connection.on('close', () => console.info('Mongodb connection closed'));
        connection.on('error', err => console.info('Error Connecting to mongodb', err.message));
        connection.on('reconnected', () => console.info('Mongodb reconnected successfully'));

        return true;

    } catch (err) {
        console.info('Mongodb connection error', JSON.stringify(err));
        return false;
    }
};

const disconnect = () => {
    return mongoose.disconnect()
        .then(() => {
        console.log('Disconnected from the database');
        })
        .catch((error) => {
        console.error('Error disconnecting from the database:', error);
        });
};

const isConnected = () => {
    return mongoose.connection.readyState === 1 ? true : false;
};

const helper = {
    getCredentials,
    connect,
    disconnect,
    isConnected
};

module.exports = helper;
