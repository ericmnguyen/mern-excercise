const initialState = {
  userName: '',
  password: '',
};

export const userReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, userName: action.param };
    default:
      return state;
  }
};
