import {combineReducers} from 'redux';
import catReducer from './cat';
import dogReducer from './dog';

export const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});
