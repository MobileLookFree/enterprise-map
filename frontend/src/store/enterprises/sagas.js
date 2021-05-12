import { all } from 'redux-saga/effects';
import getWatcher from './get/saga';
import searchWatcher from './search/saga';
import downloadWatcher from './download/saga';
import { loadWatcher, saveWatcher, dropWatcher } from './favorites/saga';

export default function* enterprisesWatcher() {
  yield all([
    getWatcher(),
    searchWatcher(),
    downloadWatcher(),
    loadWatcher(),
    saveWatcher(),
    dropWatcher()
  ]);
}