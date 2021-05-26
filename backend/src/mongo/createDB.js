const { MONGO_URL } = require('./const');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(MONGO_URL, (error, db) => {
  if (error) {
    throw error;
  }
  console.log('Database created!');
  const dbo = db.db('enterprises');
  dbo.createCollection('enterprises', error => {
    if (error) {
      throw error;
    }
    console.log('Collection created!');
    db.close();
  });
});