import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions';

const getEnterprises = () =>
  fetch(`http://localhost:8080/api/get-enterprises`)
    .then(response => response.json())
    .then(data => data.filter(item => item.dadata.geo_lat && item.dadata.geo_lon));

function* getWorker({ payload }) {
  try {
    if (payload) {
      const response = yield call(() => getEnterprises());
      yield put({
        type: actionTypes.get.success,
        payload: response
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.get.error,
      payload: error
    });
  }
}

export default function* getWatcher() {
  yield takeLatest(actionTypes.get.load, getWorker);
}