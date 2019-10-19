import {
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_FAIL
} from "./user.types";

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: SIGN_IN_FAIL,
  payload: error
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFail = error => ({
  type: SIGN_OUT_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});
