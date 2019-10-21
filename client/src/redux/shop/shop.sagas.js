import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { loadCollectionsSuccess, loadCollectionsFail } from "./shop.actions";

import { LOAD_COLLECTIONS_START } from "./shop.types";

export function* loadCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(loadCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(loadCollectionsFail(e.message));
  }
}

/**
 * Saga
 */
export function* loadCollectionsStart() {
  yield takeLatest(LOAD_COLLECTIONS_START, loadCollectionsAsync);
}
