export const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};
