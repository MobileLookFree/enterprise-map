export const getUniqFields = (data = [], field) =>
  [...new Set(data
    .filter(element => element[field])
    .map(element => element[field]))]