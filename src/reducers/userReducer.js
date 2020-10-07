const initialState = {
  userName: '',
  password: '',
  summaryData: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, userName: action.param };
    case 'GET_USER_INFO':
      return { ...state, summaryData: {} };
    case 'GET_USER_INFO_SUCCESS':
      return { ...state, summaryData: action.data };
    case 'GET_USER_INFO_FAIL':
      return state;
    default:
      return state;
  }
};
