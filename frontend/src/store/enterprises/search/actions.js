import { PREFIX } from '../prefix';

export const actionTypes = {
  search: {
    search: `${PREFIX}_SEARCH_LOAD`,
    success: `${PREFIX}_SEARCH_SUCCESS`,
    error: `${PREFIX}_SEARCH_ERROR`,
  }
};

export const searchType = (searchQuery) => {
  return {
    type: actionTypes.search.search,
    payload: searchQuery
  }
};