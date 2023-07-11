const mongo = require('../helpers/mongo');
const config = require('../../config');
const NODE_ENV = config.env;
const notificationTypesModel = require('../models/notificationtypes');

async function up() {
  try {
    // Connect to the MongoDB database
    mongo.connect().then((res) => {
        if (res) {
            if (mongo.isConnected()) {
                console.log(`Mongo isConnected:${mongo.isConnected()} on ${NODE_ENV} environment`);
            }
        }
    }).catch(err => {
        console.log(err);
    });

    await notificationTypesModel.notificationTypes.insertMany([
        {
            "name": "SMS"
        },
        {
            "name": "E-mail"
        },
        {
            "name": "Push Notification"
        }
    ]);
    
    console.log('Migration up complete');
  } catch (error) {
    console.error('Error performing migration:', error);
  } finally {
    mongo.disconnect();
    console.log('Mongo is disconnected');
  }
}

up();
