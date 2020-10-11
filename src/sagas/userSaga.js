import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { getAPI, postAPI, basePath } from '../utils/appRequest';
import * as action from '../actions/userAction';

// FETCH_USERS
export function* getUser({ params }) {
  const url = `${basePath}/users`;
  try {
    const result = yield call(postAPI, url, params);
    console.log('result', result);
    if (result.data) {
      yield put(action.getUserInfoSuccess(result.data));
      yield put(action.fieldVerifying(true));
    } else {
      yield put(action.getUserInfoSuccess(result.data));
      yield put(action.fieldVerifying(false));
    }
  } catch (error) {
    yield put({ type: 'GET_USER_INFO_FAIL', error });
  }
}

// use them in parallel
export function* userWatcher() {
  yield takeLatest('GET_USER_INFO', getUser);
}