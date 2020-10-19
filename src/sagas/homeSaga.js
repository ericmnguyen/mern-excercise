import { takeEvery, takeLatest, put, call, all } from 'redux-saga/effects';
import { getAPI, postAPI, basePath } from '../utils/appRequest';
import * as action from '../actions/homeAction';

// FETCH_USERS
export function* getSummary({ params }) {
  const url = `${basePath}/summary`;
  try {
    const result = yield call(postAPI, url, params);
    if (result) {
      yield put(action.getSummarySuccess(result.data));
    }
  } catch (error) {
    yield put({ type: 'GET_USER_INFO_FAIL', error });
  }
}

export function* getTotalCasesDaily() {
  const totalCasesUrl = `https://covid19-update-api.herokuapp.com/api/v1/cases/graphs/dailyCases`;
  const totalCuredUrl = `https://covid19-update-api.herokuapp.com/api/v1/cases/graphs/dailyCured`;
  const totalDeathUrl = `https://covid19-update-api.herokuapp.com/api/v1/death/graph/dailyDeaths`;
  try {
    const [res1, res2, res3] = yield all([
      call(getAPI, totalCasesUrl),
      call(getAPI, totalCuredUrl),
      call(getAPI, totalDeathUrl),
    ]);
    if (res1 && res2 && res3) {
      yield put(action.getTotalCasesDailySuccess(res1.data));
      yield put(action.getTotalCuredDailySuccess(res2.data));
      yield put(action.getTotalDeathDailySuccess(res3.data));
    }
  } catch (error) {
    yield put({ type: 'GET_TOTAL_CASES_DAILY_FAIL', error });
  }
}

// use them in parallel
export function* homeWatcher() {
  yield takeLatest('GET_SUMMARY', getSummary);
  yield takeLatest('GET_TOTAL_CASES_DAILY', getTotalCasesDaily);
}
