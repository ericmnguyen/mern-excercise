const initialState = {
  userInfo: {},
  isVerify: true,
  error: '',
  registerSuccess: false,
  registerMessage: '',
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return { ...state, userInfo: action.params, isLoading: true };
    case 'GET_USER_INFO_SUCCESS':
      return {
        ...state,
        userInfo: action.data,
        isLoading: false,
      };
    case 'GET_USER_INFO_FAIL':
      return { ...state, error: action.err, isLoading: false };
    case 'USER_REGISTER':
      return { ...state, registerSuccess: true, isLoading: true };
    case 'USER_REGISTER_SUCCESS':
      return { ...state, registerSuccess: true, isLoading: false };
    case 'USER_REGISTER_FAIL':
      return {
        ...state,
        registerSuccess: false,
        registerMessage: action.err,
        isLoading: false,
      };
    case 'FIELD_VERIFYING':
      return { ...state, isVerify: action.payload };
    case 'CLEAN_UP':
      localStorage.clear();
      return {
        ...state,
        registerSuccess: false,
        registerMessage: '',
        userInfo: {},
        error: '',
      };
    default:
      return state;
  }
};
