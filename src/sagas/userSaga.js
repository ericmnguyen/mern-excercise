import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { getAPI, postAPI, basePath } from '../utils/appRequest';
import * as action from '../actions/userAction';

// FETCH_USERS
export function* getUser({ params }) {
  const url = `${basePath}/users`;
  try {
    const result = yield call(postAPI, url, params);
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

export function* userRegister({ params }) {
  const url = `${basePath}/users/add`;
  try {
    const result = yield call(postAPI, url, params);
    console.log('result', result);
    if (result.data && result.status === 201) {
      yield put(action.userRegisterSuccess(result.data));
    } else {
      yield put(action.userRegisterFail(result.data));
    }
  } catch (error) {
    yield put({ type: 'USER_REGISTER_FAIL', error });
  }
}

// use them in parallel
export function* userWatcher() {
  yield takeLatest('GET_USER_INFO', getUser);
  yield takeLatest('USER_REGISTER', userRegister);
}
