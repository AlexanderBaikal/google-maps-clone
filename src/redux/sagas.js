import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { db, getComments, storageRef } from "../firebase";
import {
  LOAD_COMMENTS,
  requestComments,
  requestCommentsFailed,
  requestCommentsSuccess,
} from "./sidebars/placeDescription/comments/actions";
import {
  LOAD_DATA,
  requestData,
  requestDataFailed,
  requestDataSuccess,
} from "./sidebars/placeDescription/data/actions";
import {
  LOAD_IMAGES,
  requesImagesFailed,
  requestImages,
  requestImagesSuccess,
} from "./sidebars/placeDescription/images/actions";
import {
  loadPlaces,
  LOAD_PLACES,
  requestPlaces,
  requestPlacesFailed,
  requestPlacesSuccess,
} from "./sidebars/placeDescription/places/actions";
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

async function fetchImages(keyword) {
  var res;
  if (keyword === "All") {
    res = await storageRef.listAll();
  } else {
    res = await storageRef.child(keyword).listAll();
  }

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
    fork(watchLoadData),
    fork(watchLoadPlaces),
    fork(watchLoadAllPlaces),
    fork(watchLoadComments),
  ]);
}
