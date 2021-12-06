import { all } from 'redux-saga/effects';
import booking from './booking/sagas';

export default function* rootSaga() {
  return yield all([
    booking,
  ]);
}
