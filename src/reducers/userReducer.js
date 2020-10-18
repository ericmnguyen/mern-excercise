const initialState = {
  userName: '',
  password: '',
  userInfo: {},
  isVerify: true,
  error: '',
  registerSuccess: false,
  registerMessage: '',
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
    case 'USER_REGISTER_SUCCESS':
      return { ...state, registerSuccess: true };
    case 'USER_REGISTER_FAIL':
      return { ...state, registerSuccess: false, registerMessage: action.err };
    case 'FIELD_VERIFYING':
      return { ...state, isVerify: action.payload };
    case 'CLEAN_UP':
      return { ...state, registerSuccess: false, registerMessage: '' };
    default:
      return state;
  }
};
