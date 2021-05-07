const keyBy = (data = [], key) => 
  data.reduce((accumulator, value) => ({
    ...accumulator,
    [key ? value[key] : value]: value
  }), {});

export default keyBy;