import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import { getAPI, postAPI, basePath } from '../utils/appRequest';
import * as action from '../actions/homeAction';

// FETCH_USERS
export function* getSummary({ params }) {
  const url = `https://api.covid19api.com/summary`;
  try {
    const result = yield call(getAPI, url, params);
    if (result) {
      yield put(action.getSummarySuccess(result.data));
    }
  } catch (error) {
    yield put({ type: 'GET_USER_INFO_FAIL', error });
  }
}

// use them in parallel
export function* homeWatcher() {
  yield takeLatest('GET_SUMMARY', getSummary);
}
