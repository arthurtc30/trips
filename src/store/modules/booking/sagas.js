import { call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookingSuccess } from './actions';
import api from '../../../services/api';

function* addToBooking({ id }) {
  const response = yield call(api.get, `/trips/${id}`);

  yield put(addBookingSuccess(response.data));
}

export default all([
  takeLatest('ADD_BOOKING_REQUEST', addToBooking),
]);
