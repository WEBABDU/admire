import { takeEvery, call, put } from "redux-saga/effects";

import { request } from "services/api/api";
import Actions from "./actions";

// ------------------------------------------------------

function* LoadList(action) {
  const { entity, url, method, appendData = false } = action.payload;

  try {
    const response = yield call(request, {
      url,
      method,
    });

    const data = response.data.hasOwnProperty("data")
      ? response.data.data
      : response.data;

    yield put(Actions.LoadList.success({ entity, data, appendData }));
  } catch (e) {
    yield put(Actions.LoadList.failure({ entity, error: e }));
  }
}

// ------------------------------------------------------

export function* apiSaga() {
  yield takeEvery(Actions.LoadList.TRIGGER, LoadList);
}
