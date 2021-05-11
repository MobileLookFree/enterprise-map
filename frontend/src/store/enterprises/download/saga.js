import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions';

const downloadEnterprises = () =>
  fetch('/api/download-enterprises')
    .then(response => response.blob())
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'Справочник предприятий.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();      
    });

function* downloadWorker() {
  try {
    yield call(() => downloadEnterprises());
    yield put({
      type: actionTypes.download.success,
    });
  } catch (error) {
    yield put({
      type: actionTypes.download.error,
      payload: error
    });
  }
}

export default function* downloadWatcher() {
  yield takeLatest(actionTypes.download.start, downloadWorker);
}