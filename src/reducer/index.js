import { combineReducers } from 'redux';
import TestReducer from '../reducer/TestReducer';

export default combineReducers({
  loading: TestReducer,
});
