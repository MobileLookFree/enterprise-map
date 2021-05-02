
const fetch = require('node-fetch');
const { saveJSON } = require('./lib/saveJSON');
const { START, END } = require('./const');

const url = 'https://cleaner.dadata.ru/api/v1/clean/address';
const { dadataToken, dadataSecret } = require('./private/tokens');
const rawAddresses = require('./resources/addresses/rawAddresses.json') || [];

const addresses = rawAddresses
  .map(address => `${address.regionType} ${address.region} ${address.street}`)
  .slice(START, END);

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + dadataToken,
    'X-Secret': dadataSecret
  },
  body: JSON.stringify(addresses)
}

fetch(url, options)
  .then(response => response.json())
  .then(result => saveJSON(`./resources/addresses/dadata_${START}_${END}.json`, result))
  .catch(error => console.log('error', error));