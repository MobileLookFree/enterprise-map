const tf = require(process.platform === 'win32'
  ? '@tensorflow/tfjs-node-gpu' // NVIDIA CUDA 
  : '@tensorflow/tfjs-node'); // CPU
const trainData = require('../../resources/search/trainData.json');
const { MODEL_NAME, CLASSES } = require('./const');

const encodeData = async (encoder, data) => {
  const sentences = data.map(item => item.text.toLowerCase());
  const embeddings = await encoder.embed(sentences);
  return embeddings;
};

const trainModel = async (encoder) => {
  try {
    const model = await tf.loadLayersModel(`file://./resources/search/${MODEL_NAME}/model.json`);
    console.log('Loading model...');
    return model;
  } catch (error) {
    console.log(error);
    console.log('Training new model');
  }

  const xTrain = await encodeData(encoder, trainData);

  const yTrain = tf.tensor2d(
    trainData.map(item => [
      item.result === 'tech' ? 1 : 0,
      item.result === 'human' ? 1 : 0]
    )
  );

  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [xTrain.shape[1]],
      activation: 'softmax',
      units: CLASSES
    })
  );

  model.compile({
    loss: 'categoricalCrossentropy',
    optimizer: tf.train.adam(0.001),
    metrics: ['accuracy']
  });

  await model.fit(xTrain, yTrain, {
    batchSize: 32,
    validationSplit: 0.1,
    shuffle: true,
    epochs: 256,
  });

  await model.save(`file://./resources/search/${MODEL_NAME}`);

  return model;
};

const suggest = async (model, encoder, type, threshold) => {
  const xPredict = await encodeData(encoder, [{ text: type }]);
  const prediction = await model.predict(xPredict).data();

  const result = { type: null, prediction };

  if (prediction[0] > threshold) {
    result.type = 'tech';
  } else if (prediction[1] > threshold) {
    result.type = 'human';
  }
  return result;
};

module.exports = {
  suggest,
  trainModel
};