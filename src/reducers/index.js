import { combineReducers } from 'redux';
import point from './point.reducer';

const rootReducer = combineReducers({
  point,
});

export default rootReducer;
