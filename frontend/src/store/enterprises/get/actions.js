export const actionTypes = {
  get: {
    load: 'ENTERPRISES_LOAD',
    success: 'ENTERPRISES_SUCCESS',
    error: 'ENTERPRISES_ERROR',
  },
};

export const setLoading = (isLoading) => {
  return {
    type: actionTypes.get.load,
    payload: isLoading
  }
};