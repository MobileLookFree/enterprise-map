import { PREFIX } from '../prefix';

export const actionTypes = {
  get: {
    load: `${PREFIX}_LOAD`,
    success: `${PREFIX}_SUCCESS`,
    error: `${PREFIX}_ERROR`,
  },
};

export const startLoading = () => {
  return {
    type: actionTypes.get.load,
  }
};