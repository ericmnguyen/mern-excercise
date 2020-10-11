import { all } from 'redux-saga/effects';
import { homeWatcher } from './homeSaga';
import { userWatcher } from './userSaga';
import { summaryChartsWatcher } from './summaryChartsSaga';

export default function* rootSaga() {
  yield all([
    userWatcher(),
    homeWatcher(),
    summaryChartsWatcher(),
    // add other watchers to the array
  ]);
}
