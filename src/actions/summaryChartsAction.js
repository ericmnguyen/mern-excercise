export function getDailyTotals(params) {
  return { type: 'GET_DAILY_TOTALS', params };
}

export function getDailyTotalsSuccess(payload) {
  return { type: 'GET_DAILY_TOTALS_SUCCESS', payload };
}

export function getDailyCountry(params) {
  return { type: 'GET_DAILY_COUNTRY', params };
}

export function getDailyCountrySuccess(payload) {
  return { type: 'GET_DAILY_COUNTRY_SUCCESS', payload };
}
