import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions';

const searchEnterprises = (query) =>
  fetch('/api/search-enterprises', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(response => response.json());

function* searchWorker({ payload }) {
  try {
    if (payload) {
      const response = yield call(() => searchEnterprises(payload));
      yield put({
        type: actionTypes.search.success,
        payload: response
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.search.error,
      payload: error
    });
  }
}

export default function* searchWatcher() {
  yield takeLatest(actionTypes.search.search, searchWorker);
}