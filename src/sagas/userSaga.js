import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { getAPI, postAPI } from '../utils/appRequest';
import * as action from '../actions/userAction';

// FETCH_USERS
export function* getUser(param) {
  const url = 'http://localhost:5000';
  console.log('praammm', param);
  try {
    const result = yield call(getAPI, url);
    console.log('data', result.data);
    yield put(action.getUserInfoSuccess(result.data));
  } catch (error) {
    yield put({ type: 'GET_USER_INFO_FAIL', error });
  }
}

// use them in parallel
export function* userWatcher() {
  yield takeLatest('GET_USER_INFO', getUser);
}
