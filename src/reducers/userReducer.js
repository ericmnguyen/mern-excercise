const initialState = {
  userName: '',
  password: '',
  userInfo: {},
  isVerify: true,
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return { ...state, userInfo: {}, loadingLogin: true };
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: action.data,
        loadingLogin: false,
      };
    case 'GET_USER_INFO_FAIL':
      return { ...state, error: action.err };
    case 'FIELD_VERIFYING':
      console.log('action', action.payload);
      return { ...state, isVerify: action.payload };
    default:
      return state;
  }
};
