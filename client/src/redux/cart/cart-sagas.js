import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import { userActionTypes } from "../user/action-types";
import { clearCart } from "./cart-actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
