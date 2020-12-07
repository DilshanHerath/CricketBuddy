import { combineReducers } from 'redux';
import TestReducer from '../reducer/TestReducer';
import FooterReducer from '../reducer/FooterReducer';

export default combineReducers({
  loading: TestReducer,
  footer: FooterReducer,
});
