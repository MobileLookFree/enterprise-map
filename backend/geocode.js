
const fetch = require('node-fetch');
const saveJSON = require('./lib/saveJSON');

const { dadataToken, dadataSecret } = require('./private/tokens');
// const rawAddresses = require('./resources/rawAddresses.json');
const url = 'https://cleaner.dadata.ru/api/v1/clean/address';

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + dadataToken,
    'X-Secret': dadataSecret
  },
  body: JSON.stringify([
    'г Москва,	Кутузовский пр., д.36',
    'г Омск,	ул. Герцена, д. 48'
  ])
}

fetch(url, options)
  .then(response => response.json())
  .then(result => saveJSON('./resources/addresses.json', result))
  .catch(error => console.log('error', error));