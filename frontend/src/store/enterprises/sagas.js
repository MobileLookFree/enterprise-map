import { all } from 'redux-saga/effects';
import getWatcher from './get/saga';
import searchWatcher from './search/saga';

export default function* enterprisesWatcher() {
  yield all([
    getWatcher(),
    searchWatcher()
  ]);
}