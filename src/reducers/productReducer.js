const initialState = {};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};
