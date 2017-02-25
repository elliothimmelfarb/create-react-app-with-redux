import { combineReducers } from 'redux';
import people from './people.reducer';

const rootReducer = combineReducers({
  people,
});

export default rootReducer;
