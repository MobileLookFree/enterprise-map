const URL = 'https://cleaner.dadata.ru/api/v1/clean/address';
const START = 100;
const END = 200;

const getRequestOptions = (dadataToken, dadataSecret) => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + dadataToken,
    'X-Secret': dadataSecret
  },
})

module.exports = {
  URL,
  START,
  END,
  getRequestOptions,
};