import { combineReducers } from 'redux';
import getReducer from './get/reducer';
import searchReducer from './search/reducer';

const campaignsReducer = combineReducers({
  get: getReducer,
  search: searchReducer,
});

export default campaignsReducer;