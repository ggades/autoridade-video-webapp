import { combineReducers } from 'redux';
import home from './home';
import loading from './loading';
import errors from './errors';

const rootReducer = combineReducers({
  home,
  loading,
  errors,
});

export default rootReducer;
