import { combineReducers } from 'redux';
import enterprisesReducer from './enterprises/reducers';

const reducers = combineReducers({
  enterprises: enterprisesReducer
});

export default reducers;