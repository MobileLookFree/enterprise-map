const fetch = require('node-fetch');
const { saveJSON } = require('../lib/saveJSON');
const { getRequestOptions } = require('../lib/getRequestOptions');

const rawAddresses = require('../../resources/addresses/rawAddresses.json') || [];
const { dadataToken, dadataSecret } = require('../../private/tokens');
const { URL, START, END } = require('./const');

const addresses = rawAddresses
  .filter(address => address.id)
  .slice(START, END)
  .map(address => ({
    id: address.id,
    name: address.name,
    query: `${address.regionType} ${address.region} ${address.street}`
  }));
const responseById = {};

const getDadata = (address) => fetch(URL, {
  ...getRequestOptions(dadataToken, dadataSecret),
  body: JSON.stringify([address.query])
})
  .then(response => response.json())
  .then(result => new Promise((resolve) =>
    setTimeout(() => resolve(result), 125)
  ))
  .catch(error => console.log('error', error));

const getAddresses = async () => {
  for (const address of addresses) {
    console.log(`Waiting address #${address.id}: ${address.name}`);
    responseById[address.id] = await getDadata(address);
    console.log(`Saving address #${address.id}: ${address.name}`);
  }
  return Promise.resolve();
}

getAddresses()
  .then(() => saveJSON(`../../resources/dadata/dadata_${START}_${END}.json`, responseById));