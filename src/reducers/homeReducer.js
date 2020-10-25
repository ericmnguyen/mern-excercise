const initialState = {
  summary: {},
  summaryError: '',
  dailyCasesInfo: {
    graph: {
      categories: [],
      data: [],
    },
  },
  dailyCuredInfo: {
    graph: {
      categories: [],
      data: [],
    },
  },
  dailyDeathInfo: {
    graph: {
      categories: [],
      data: [],
    },
  },
  isLoading: false,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUMMARY':
      return { ...state, isLoading: true };
    case 'GET_SUMMARY_SUCCESS':
      return { ...state, summary: action.data, isLoading: false };
    case 'GET_SUMMARY_FAIL':
      return { ...state, summaryError: action.error, isLoading: false };
    case 'GET_TOTAL_CASES_DAILY_SUCCESS':
      return { ...state, dailyCasesInfo: action.data };
    case 'GET_TOTAL_CURED_DAILY_SUCCESS':
      return { ...state, dailyCuredInfo: action.data };
    case 'GET_TOTAL_DEATH_DAILY_SUCCESS':
      return { ...state, dailyDeathInfo: action.data };
    case 'CLEAN_UP':
      return { ...state, summaryError: '' };
    default:
      return state;
  }
};
