import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { homeReducer } from './homeReducer';
// import { productReducer } from './productReducer';
export const rootReducer = combineReducers({
  userReducer,
  homeReducer,
});
