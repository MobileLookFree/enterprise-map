import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions';

const getEnterprises = () =>
  fetch('/api/get-enterprises')
    .then(response => response.json());

function* getWorker() {
  try {
    const response = yield call(() => getEnterprises());
    yield put({
      type: actionTypes.get.success,
      payload: response
    });
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