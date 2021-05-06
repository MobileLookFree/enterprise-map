const groupBy = (data = [], key) =>
  data.reduce((accumulator, value) => {
    (accumulator[value[key]] = accumulator[value[key]] || []).push(value);
    return accumulator;
  }, {});

module.exports = {
  groupBy
};