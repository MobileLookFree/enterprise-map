const { suggestIcon, trainModel } = require('./model');
const use = require('@tensorflow-models/universal-sentence-encoder');

let sentenceEncoder = null;
let trainedModel = null;

const loadModal = async () => {
  sentenceEncoder = await use.load();
  trainedModel = await trainModel(sentenceEncoder);
}

loadModal();

console.log(suggestIcon(
  trainedModel,
  sentenceEncoder,
  'Options 123',
  0.65
));