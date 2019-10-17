import {
  LOAD_COLLECTIONS_START,
  LOAD_COLLECTIONS_SUCCESS,
  LOAD_COLLECTIONS_FAIL
} from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const loadCollectionsStart = () => ({
  type: LOAD_COLLECTIONS_START
});

export const loadCollectionsSuccess = collectionsMap => ({
  type: LOAD_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const loadCollectionsFail = errorMessage => ({
  type: LOAD_COLLECTIONS_FAIL,
  paylod: errorMessage
});

export const loadCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(loadCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(loadCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(loadCollectionsFail(error.message)));
  };
};
