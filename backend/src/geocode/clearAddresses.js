const fs = require('fs');
const { saveJSON } = require('../lib/saveJSON');
const { clearObject } = require('../lib/clearObject');

let dadata = {};

const dadataFiles = fs
  .readdirSync('../../resources/dadata/')
  .filter(file => file.endsWith('.json'));

for (const file of dadataFiles) {
  const fileData = require(`../../resources/dadata/${file}`);
  dadata = {
    ...dadata,
    ...fileData
  }
}

Object
  .keys(dadata)
  .forEach(key => {
    dadata[key] = dadata[key]
      ? clearObject(dadata[key][0])
      : {};
    return;
  })

saveJSON('../../resources/dadata/dadata.json', dadata);