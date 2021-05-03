const { saveJSON } = require('./lib/saveJSON');
const { START, END } = require('./const');

const dadata = require(`./resources/dadata/dadata_${START}_${END}.json`) || [];
const rawAddresses = require('./resources/addresses/rawAddresses.json') || [];

const addresses = rawAddresses
  .filter(address => address.id)
  .map((address, index) => ({
    ...address,
    dadata: dadata[index] || {}
  }));

saveJSON('./resources/addresses/addresses.json', addresses);