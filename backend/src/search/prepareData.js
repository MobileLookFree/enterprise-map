const { saveJSON } = require('../lib/saveJSON');
const { getUniqueFields } = require('../lib/getUniqueFields');
const addresses = require('../../resources/addresses/addresses.json') || [];

const branches =
  getUniqueFields(addresses, 'branch', false)
    .map(branch => ({
      text: branch,
      result: ''
    }));
const subbranches =
  getUniqueFields(addresses, 'subbranch', false)
    .map(subbranch => ({
      text: subbranch,
      result: ''
    }));

saveJSON('../../resources/search/trainData.json', branches.concat(subbranches));