import { combineReducers } from 'redux';
import star from './star.reducer';

const rootReducer = combineReducers({
  star,
});

export default rootReducer;
