const { suggestIcon, trainModel } = require('./model');
const use = require('@tensorflow-models/universal-sentence-encoder');

class Search {
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

  getIcon = () => suggestIcon(
    this.model,
    this.encoder,
    'Sentrum', // options = book, nut = run
    0.65
  );
}

const search = new Search();
search.loadModal()
  .then(async () => {
    const icon = await search.getIcon();
    console.log(icon)
  });