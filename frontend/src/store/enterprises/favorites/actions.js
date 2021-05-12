import { PREFIX } from '../prefix';

export const actionTypes = {
  favorites: {
    load: `${PREFIX}_FAVORITES_LOAD`,
    get: `${PREFIX}_FAVORITES_GET`,
    set: `${PREFIX}_FAVORITES_SET`,
    save: `${PREFIX}_FAVORITES_SAVE`,
    drop: `${PREFIX}_FAVORITES_DROP`,
  },
};

export const loadFavorites = () => {
  return {
    type: actionTypes.favorites.load,
  }
};

export const getFavorites = (favorites) => {
  return {
    type: actionTypes.favorites.get,
    payload: favorites
  }
};

export const setFavorite = (id) => {
  return {
    type: actionTypes.favorites.set,
    payload: id
  }
};

export const saveFavorites = () => {
  return {
    type: actionTypes.favorites.save,
  }
};

export const dropFavorites = () => {
  return {
    type: actionTypes.favorites.drop,
  }
};