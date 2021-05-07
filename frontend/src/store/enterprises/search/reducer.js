import initialState from './initialState';
import { actionTypes } from './actions';

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.search.search:
      return {
        ...state,
        isSearchLoading: true,
        searchQuery: payload
      }
    case actionTypes.search.success:
      return {
        ...state,
        isSearchLoading: false,
        searchResult: payload
      }
    case actionTypes.search.error:
      return {
        ...state,
        searchError: payload
      }
    default:
      return state;
  }
};

export default searchReducer;