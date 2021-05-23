const getUniqueFields = (data = [], field, withEmpty = true) => {
  const newData = [...new Set(data
    .map(item => item[field])
  )];
  return withEmpty
    ? newData
    : newData.filter(item => item)
}

module.exports = {
  getUniqueFields
};