import { all } from 'redux-saga/effects';
import enterprisesWatcher from './enterprises/sagas';

export default function* rootSaga() {
  yield all([
    enterprisesWatcher(),
  ]);
}