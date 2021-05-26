const { MONGO_URL, SETTINGS } = require('./const');
const MongoClient = require('mongodb').MongoClient;

const readEnterprises = async () => {
  const client = await MongoClient.connect(MONGO_URL, SETTINGS);;
  const result = await client
    .db('enterprises')
    .collection('enterprises')
    .find()
    .toArray();
  return result;
};

module.exports = {
  readEnterprises
};