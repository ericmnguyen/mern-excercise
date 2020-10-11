import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import * as dayjs from 'dayjs';
import { getAPI, postAPI, basePath } from '../utils/appRequest';
import * as action from '../actions/summaryChartsAction';

export function* getDailyTotals({ params }) {
  const url = `https://covid-19-data.p.rapidapi.com/report/totals`;
  const headers = {
    'X-RapidAPI-Key': '9bf2330650msh968268dd1027293p1765d2jsnd83ff83eebba',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
  };
  const yesterday = {
    ...params,
    date: dayjs().add(-3, 'day').format('YYYY-MM-DD'),
  };
  console.log('yesterday', yesterday);
  const oneWeekAgo = {
    ...params,
    date: dayjs().add(-7, 'day').format('YYYY-MM-DD'),
  };
  const twoWeekAgo = {
    ...params,
    date: dayjs().add(-14, 'day').format('YYYY-MM-DD'),
  };
  try {
    const result = yield call(getAPI, url, yesterday, headers);
    console.log('result', result);
    if (result) {
      yield put(action.getDailyTotalsSuccess(result.data));
    }
  } catch (error) {
    yield put({ type: 'GET_DAILY_TOTAL_FAIL', error });
  }
}

export function* getDailyCountry({ params }) {
  const url = `https://covid-19-data.p.rapidapi.com/report/country/code`;
  const headers = {
    'X-RapidAPI-Key': '9bf2330650msh968268dd1027293p1765d2jsnd83ff83eebba',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
  };
  try {
    console.log('saga', params);
    const result = yield call(getAPI, url, params, headers);
    console.log('result', result);
    if (result) {
      yield put(action.getDailyCountrySuccess(result.data));
    }
  } catch (error) {
    yield put({ type: 'GET_DAILY_COUNTRY_FAIL', error });
  }
}

// use them in parallel
export function* summaryChartsWatcher() {
  yield takeLatest('GET_DAILY_TOTALS', getDailyTotals);
  yield takeLatest('GET_DAILY_COUNTRY', getDailyCountry);
}
