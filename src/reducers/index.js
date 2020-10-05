import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
// import { productReducer } from './productReducer';
export const reducers = combineReducers({
  userReducer,
  // productReducer,
});
