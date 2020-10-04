const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload;
    default:
      return state;
  }
};
