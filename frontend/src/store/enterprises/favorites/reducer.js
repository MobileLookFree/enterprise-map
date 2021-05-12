import initialState from './initialState';
import { actionTypes } from './actions';

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.favorites.get:
      return {
        favorites: payload,
      }
    case actionTypes.favorites.set:
      return {
        favorites: state.favorites.includes(payload)
          ? state.favorites.filter(item => item !== payload)
          : state.favorites.concat([payload]),
      }
    default:
      return state;
  }
};

export default favoritesReducer;