import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { db, getComments, storageRef } from "../firebase";
import {
  LOAD_COMMENTS,
  requestComments,
  requestCommentsFailed,
  requestCommentsSuccess,
} from "./comments/actions";
import {
  LOAD_DATA,
  requestData,
  requestDataFailed,
  requestDataSuccess,
} from "./place/actions";
import {
  LOAD_IMAGES,
  requestImages,
  requesImagesFailed,
  requestImagesSuccess,
  LOAD_ALL_IMAGES,
  requestAllImages,
  requestAllImagesFailed,
  requestAllImagesSuccess,
} from "./images/actions";
import {
  loadPlaces,
  LOAD_PLACES,
  requestPlaces,
  requestPlacesFailed,
  requestPlacesSuccess,
  LOAD_ALL_PLACES,
  requestAllPlaces,
  requestAllPlacesFailed,
  requestAllPlacesSuccess,
} from "./places/actions";
import {
  LOAD_ALL_POINTS,
  requestAllPoints,
  requestAllPointsFailed,
  requestAllPointsSuccess,
} from "./points/actions";

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

async function fetchAllImages() {
  let result = [];
  let res = await storageRef.listAll();
  let promises = res.prefixes.map((folderRef) => folderRef.listAll());
  const folders = await Promise.all(promises);
  for (var folder of folders) {
    for (var item of folder.items) {
      result.push(item);
    }
  }
  promises = result.map((imageRef) => imageRef.getDownloadURL());
  return await Promise.all(promises);
}

function* workerLoadAllImages() {
  try {
    yield put(requestAllImages());
    const data = yield call(fetchAllImages);
    yield put(requestAllImagesSuccess(data));
  } catch (error) {
    yield put(requestAllImagesFailed());
  }
}

export function* watchLoadAllImages() {
  yield takeEvery(LOAD_ALL_IMAGES, workerLoadAllImages);
}

// ----------------------------

async function fetchImages(keyword) {
  var res = await storageRef.child(keyword).listAll();

  const promises = res.items.map((imageRef) => imageRef.getDownloadURL());
  return await Promise.all(promises);
}

function* workerLoadImages(action) {
  try {
    yield put(requestImages());
    const data = yield call(fetchImages, action.payload);
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

async function fetchAllPoints(collection = "places") {
  var res = await db.collection(collection).get();
  return res.docs.map((doc) => doc.data());
}

function* workerLoadAllPoints() {
  try {
    yield put(requestAllPoints());
    const data = yield call(fetchAllPoints);
    yield put(requestAllPointsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(requestAllPointsFailed());
  }
}

export function* watchLoadAllPoints() {
  yield takeEvery(LOAD_ALL_POINTS, workerLoadAllPoints);
}

// ----------------------------

function* workerLoadComments(action) {
  try {
    yield put(requestComments());
    const data = yield call(getComments, action.payload);
    yield put(requestCommentsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(requestCommentsFailed());
  }
}

export function* watchLoadComments() {
  yield takeEvery(LOAD_COMMENTS, workerLoadComments);
}

// ----------------------------

export function* rootSaga() {
  yield all([
    fork(watchLoadImages),
    fork(watchLoadAllImages),
    fork(watchLoadData),
    fork(watchLoadPlaces),
    fork(watchLoadAllPlaces),
    fork(watchLoadComments),
    fork(watchLoadAllPoints),
  ]);
}
