import { takeEvery, put, call } from "redux-saga/effects";
import { db } from "../firebase";
import {
  LOAD_DATA,
  requestData,
  requestDataFailed,
  requestDataSuccess,
} from "./sidebars/placeDescription/actions";

function fetchData() {
  return db
    .collection("descriptions")
    .doc("Yarkomoll")
    .get()
    .then((doc) => doc.data());
}

function* workerLoadData() {
  try {
    yield put(requestData());
    const data = yield call(fetchData);
    yield put(requestDataSuccess(data));
  } catch (error) {
    yield put(requestDataFailed());
  }
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}
