const { suggest, trainModel } = require('./model');
const use = require('@tensorflow-models/universal-sentence-encoder');

class TFSearch {
  setEncoder = (encoder) => {
    this.encoder = encoder;
  }

  setModel = (model) => {
    this.model = model;
  }

  loadModal = async () => {
    const encoder = await use.load();
    this.setEncoder(encoder);
    const model = await trainModel(encoder);
    this.setModel(model);
  }

  getType = (type) => suggest(
    this.model,
    this.encoder,
    type,
    0.7
  );
}

module.exports = {
  TFSearch
};