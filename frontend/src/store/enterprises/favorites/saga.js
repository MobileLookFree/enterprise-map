import { call, put, select, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions';

const getFavorites = () =>
  JSON.parse(localStorage.getItem('favorites'));

const saveFavorites = (favorites) =>
  localStorage.setItem('favorites', JSON.stringify(favorites));

const dropFavorites = () =>
  localStorage.removeItem('favorites');

function* loadWorker() {
  const favorites = yield call(() => getFavorites());
  yield put({
    type: actionTypes.favorites.get,
    payload: favorites || []
  });
}

function* saveWorker() {
  const { enterprises } = yield select();
  const { favorites } = enterprises.favorites;
  yield call(() => saveFavorites(favorites));
}

function* dropWorker() {
  yield call(() => dropFavorites());
  yield put({
    type: actionTypes.favorites.get,
    payload: []
  });
}

export function* loadWatcher() {
  yield takeLatest(actionTypes.favorites.load, loadWorker);
}

export function* saveWatcher() {
  yield takeLatest(actionTypes.favorites.set, saveWorker);
}

export function* dropWatcher() {
  yield takeLatest(actionTypes.favorites.drop, dropWorker);
}