import { all } from "redux-saga/effects";

import { apiSaga } from "containers/saga";

export function* rootSaga() {
  yield all([apiSaga()]);
}
