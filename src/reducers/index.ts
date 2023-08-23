import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
