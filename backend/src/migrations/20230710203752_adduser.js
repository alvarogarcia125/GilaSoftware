const mongo = require('../helpers/mongo');
const config = require('../../config');
const NODE_ENV = config.env;
const usersModel = require('../models/users');

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

    await usersModel.users.insertMany([{
        "name" : "Alvaro Garcia",
        "email" : "alvarogarciacabrera@outlook.com",
        "channels" : [
            "SMS",
            "E-Mail"
        ],
        "subscribed" : [
            "Sports",
            "Finance",
            "Movies"
        ],
        "phone" : "3004522987"
    }]);
    
    console.log('Migration up complete');
  } catch (error) {
    console.error('Error performing migration:', error);
  } finally {
    mongo.disconnect();
    console.log('Mongo is disconnected');
  }
}

up();
