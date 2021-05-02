const excelToJson = require('convert-excel-to-json');
const { saveJSON } = require('./lib/saveJSON');
const { getAddressesFields } = require('./lib/getAddressesFields.js');

const rawAddresses = excelToJson({
  sourceFile: './resources/rawAddresses.xlsx'
});

saveJSON('./resources/rawAddresses1.json', getAddressesFields(rawAddresses));