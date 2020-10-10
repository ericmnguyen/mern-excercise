const initialState = {
  summary: {},
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUMMARY_SUCCESS':
      return { ...state, summary: action.data };
    default:
      return state;
  }
};
