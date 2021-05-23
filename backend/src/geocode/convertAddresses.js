const excelToJson = require('convert-excel-to-json');
const { saveJSON } = require('./lib/saveJSON');
const { getAddressesFields } = require('./lib/getAddressesFields.js');

const rawAddresses = excelToJson({
  sourceFile: '../../resources/addresses/rawAddresses.xlsx'
});

saveJSON('../../resources/addresses/rawAddresses.json', getAddressesFields(rawAddresses));