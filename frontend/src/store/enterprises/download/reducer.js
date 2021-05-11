import initialState from './initialState';
import { actionTypes } from './actions';

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.download.start:
      return {
        ...state,
        isDownloading: true,
      }
    case actionTypes.download.success:
      return {
        ...state,
        isDownloading: false,
      }
    case actionTypes.download.error:
      return {
        ...state,
        downloadingError: payload
      }
    default:
      return state;
  }
};

export default searchReducer;