import { combineReducers } from 'redux';
import getReducer from './get/reducer';
import searchReducer from './search/reducer';
import favoritesReducer from './favorites/reducer';

const campaignsReducer = combineReducers({
  get: getReducer,
  search: searchReducer,
  favorites: favoritesReducer,
});

export default campaignsReducer;