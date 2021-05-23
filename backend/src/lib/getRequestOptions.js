const getRequestOptions = (dadataToken, dadataSecret) => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + dadataToken,
    'X-Secret': dadataSecret
  },
});

module.exports = {
  getRequestOptions,
};