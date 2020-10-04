import { takeEvery } from 'redux-saga/effects';

// FETCH_USERS
export default function* fetchUsers({ param }) {
  const url = '';
  try {
    const data = yield call(param, url);
    yield put({ type: 'GET_ALL_USERS_SUCCESS', data });
  } catch (error) {
    yield put({ type: 'GET_ALL_USERS_FAIL', error });
  }
}

// use them in parallel
export default function* rootSaga() {
  yield takeEvery('GET_ALL_USERS', fetchUsers);
}
