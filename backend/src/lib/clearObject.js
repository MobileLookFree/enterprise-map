const clearObject = (object = {}) => {
  Object
    .keys(object)
    .forEach(key => {
      !object[key] && delete object[key];
      return;
    });
  return object;
}

module.exports = {
  clearObject
};