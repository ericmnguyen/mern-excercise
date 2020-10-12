import { all } from 'redux-saga/effects';
import { homeWatcher } from './homeSaga';
import { userWatcher } from './userSaga';

export default function* rootSaga() {
  yield all([
    userWatcher(),
    homeWatcher(),
    // add other watchers to the array
  ]);
}
