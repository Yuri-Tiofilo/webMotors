import { combineReducers } from 'redux';

import cars from './cars/reducer';
import commons from './common/reducer';

export default combineReducers({
  cars,
  commons,
});
