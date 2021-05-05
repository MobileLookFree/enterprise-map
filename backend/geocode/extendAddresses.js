const { saveJSON } = require('./lib/saveJSON');

const rawAddresses = require('./resources/addresses/rawAddresses.json') || [];
const dadata = require('./resources/dadata/dadata.json') || {};

const addresses = rawAddresses
  .filter(address => address.id)
  .map(address => ({
    ...address,
    dadata: dadata[address.id] || {}
  }));

saveJSON('./resources/addresses/addresses.json', addresses);