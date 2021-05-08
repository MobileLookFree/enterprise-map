export const actionTypes = {
  get: {
    load: 'ENTERPRISES_LOAD',
    success: 'ENTERPRISES_SUCCESS',
    error: 'ENTERPRISES_ERROR',
  },
};

export const startLoading = () => {
  return {
    type: actionTypes.get.load,
  }
};