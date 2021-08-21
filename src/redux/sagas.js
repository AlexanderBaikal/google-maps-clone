import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { db, storageRef } from "../firebase";
import {
  loadPlaces,
  LOAD_DATA,
  LOAD_IMAGES,
  LOAD_PLACES,
  requesImagesFailed,
  requestPlacesFailed,
  requestData,
  requestDataFailed,
  requestDataSuccess,
  requestImages,
  requestImagesSuccess,
  requestPlaces,
  requestPlacesSuccess,
} from "./sidebars/placeDescription/actions";
import {
  LOAD_ALL_PLACES,
  requestAllPlaces,
  requestAllPlacesFailed,
  requestAllPlacesSuccess,
} from "./sidebars/placesBar/actions";

function fetchData(document) {
  
  return db
    .collection("descriptions")
    .doc(document)
    .get()
    .then((doc) => doc.data());
}

function* workerLoadData(action) {
  try {
    yield put(requestData());
    const data = yield call(fetchData, action.payload);
    yield put(requestDataSuccess(data));
    yield put(loadPlaces(data.inBuilding));
  } catch (error) {
    yield put(requestDataFailed());
  }
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}

// ----------------------------

async function fetchImages() {
  const res = await storageRef.listAll();
  const promises = res.items.map((imageRef) => imageRef.getDownloadURL());
  return await Promise.all(promises);
}

function* workerLoadImages() {
  try {
    yield put(requestImages());
    const data = yield call(fetchImages);
    yield put(requestImagesSuccess(data));
  } catch (error) {
    yield put(requesImagesFailed());
  }
}

export function* watchLoadImages() {
  yield takeEvery(LOAD_IMAGES, workerLoadImages);
}

// ----------------------------

async function fetchPlaces(refs) {
  async function getDataByRef(ref) {
    var doc = await ref.get();
    return doc.data();
  }

  const promises = refs.map((ref) => getDataByRef(ref));
  return await Promise.all(promises);
}

function* workerLoadPlaces(action) {
  try {
    yield put(requestPlaces());
    const data = yield call(fetchPlaces, action.payload);
    yield put(requestPlacesSuccess(data));
  } catch (error) {
    yield put(requestPlacesFailed());
  }
}

export function* watchLoadPlaces() {
  yield takeEvery(LOAD_PLACES, workerLoadPlaces);
}

// ----------------------------

// ----------------------------

async function fetchAllPlaces(collection = "descriptions") {
  var res = await db.collection(collection).get();
  return res.docs.map((doc) => doc.data());
}

function* workerLoadAllPlaces() {
  try {
    yield put(requestAllPlaces());
    const data = yield call(fetchAllPlaces);
    yield put(requestAllPlacesSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(requestAllPlacesFailed());
  }
}

export function* watchLoadAllPlaces() {
  yield takeEvery(LOAD_ALL_PLACES, workerLoadAllPlaces);
}

// ----------------------------

export function* rootSaga() {
  yield all([
    fork(workerLoadImages),
    fork(watchLoadData),
    fork(watchLoadPlaces),
    fork(watchLoadAllPlaces),
  ]);
}
