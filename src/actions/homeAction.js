export function getSummary() {
  return { type: 'GET_SUMMARY' };
}

export function getSummarySuccess(payload) {
  return {
    type: 'GET_SUMMARY_SUCCESS',
    data: payload,
  };
}

export function getTotalCasesDaily() {
  return { type: 'GET_TOTAL_CASES_DAILY' };
}

export function getTotalCasesDailySuccess(data) {
  return { type: 'GET_TOTAL_CASES_DAILY_SUCCESS', data };
}

export function getTotalCuredDailySuccess(data) {
  return { type: 'GET_TOTAL_CURED_DAILY_SUCCESS', data };
}

export function getTotalDeathDailySuccess(data) {
  return { type: 'GET_TOTAL_DEATH_DAILY_SUCCESS', data };
}
