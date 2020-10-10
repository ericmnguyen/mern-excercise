export function getSummary() {
  return { type: 'GET_SUMMARY' };
}

export function getSummarySuccess(payload) {
  return {
    type: 'GET_SUMMARY_SUCCESS',
    data: payload,
  };
}
