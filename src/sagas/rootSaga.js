import { takeEvery, takeLatest } from 'redux-saga/effects';

// FETCH_USERS
export function* getUser(param) {
  const url = '';
  console.log('praammm', param);
  try {
    const data = yield call(param, url);
    yield put({ type: 'GET_USER_INFO_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'GET_USER_INFO_FAIL', error });
  }
}

// use them in parallel
export function* rootSaga() {
  yield takeLatest('GET_USER_INFO', getUser);
}
