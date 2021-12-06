import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookingSuccess, updateBookingAmount } from './actions';
import api from '../../../services/api';

function* addToBooking({ id }) {
  const tripExists = yield select(
    state => state.booking.find(trip => trip.id === id),
  );

  if (tripExists) {
    const amount = tripExists.amount + 1;

    yield put(updateBookingAmount(id, amount));
  } else {
    const response = yield call(api.get, `/trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    }

    yield put(addBookingSuccess(data));
  }
}

export default all([
  takeLatest('ADD_BOOKING_REQUEST', addToBooking),
]);
