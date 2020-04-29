import { all } from 'redux-saga/effects';

import cars from './cars/sagas';

export default function* rootSaga() {
  return yield all([cars]);
}
