import { takeEvery } from 'redux-saga/effects';

// FETCH_USERS
function* fetchUsers({ param }) {
  const url = '';
  try {
    const data = yield call(param, url);
    yield put({ type: 'FETCH_SUCCEEDED', data });
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

// use them in parallel
export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}
