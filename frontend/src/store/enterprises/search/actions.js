export const actionTypes = {
  search: {
    search: 'ENTERPRISES_SEARCH_LOAD',
    success: 'ENTERPRISES_SEARCH_SUCCESS',
    error: 'ENTERPRISES_SEARCH_ERROR',
  }
};

export const searchType = (searchQuery) => {
  return {
    type: actionTypes.search.search,
    payload: searchQuery
  }
};