const mongo = require('./../../src/helpers/mongo');
const config = require('./../../config');
const NODE_ENV = config.env;
const messagecategoriesModel = require('../models/messagecategories');

async function up() {
  try {
    // Connect to the MongoDB database
    mongo.connect().then((res) => {
        if (res) {
            if (mongo.isConnected()) {
                console.log(`Mongo is connected: ${mongo.isConnected()} on ${NODE_ENV} environment`);
            }
        }
    }).catch(err => {
        console.log(err);
    });

    await messagecategoriesModel.messageCategories.insertMany([
        {
            "name": "Sports"
        },
        {
            "name": "Finance"
        },
        {
            "name": "Movies"
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
