import { takeLatest, put, all, call } from "redux-saga/effects";
import { googleSignInSuccess, googleSignInFail } from "./userActions";
import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAIL,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAIL
} from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";

export function* singInWithGoogle() {
  try {
    // pull off user object from user ref
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (e) {
    yield put(googleSignInFail(e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, singInWithGoogle);
}

/**
 * Instantiate call to all other sagas
 */
export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
