const fs = require('fs');

const saveJSON = (path = './', data) => {
  fs.writeFile(path, JSON.stringify(data), (error) => {
    if (error) {
      console.error(error);
      return error;
    };
    console.log('Data saved');
    Array.isArray(data) && console.log(`Elements: ${data.length}`);
  });
  return;
}

module.exports = {
  saveJSON
};