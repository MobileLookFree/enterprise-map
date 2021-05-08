import initialState from './initialState';
import { actionTypes } from './actions';

import keyBy from '../../../lib/keyBy';

const getReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.get.load:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.get.success:
      return {
        ...state,
        isLoading: false,
        enterprises: payload,
        enterprisesById: keyBy(payload, 'id')
      }
    case actionTypes.get.error:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default:
      return state;
  }
};

export default getReducer;