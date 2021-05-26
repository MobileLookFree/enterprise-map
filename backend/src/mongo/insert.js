const { MONGO_URL, SETTINGS } = require('./const');
const MongoClient = require('mongodb').MongoClient;
const enterprises = require('../../resources/addresses/addresses.json');

const createEnterprises = async () => {
  const client = await MongoClient.connect(MONGO_URL, SETTINGS);;
  client
    .db('enterprises')
    .collection('enterprises')
    .insertMany(enterprises, error => {
      if (error) {
        throw error;
      }
      client.close();
    });
}

createEnterprises();