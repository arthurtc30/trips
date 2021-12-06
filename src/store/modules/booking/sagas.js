import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookingSuccess, updateBookingAmount } from './actions';
import api from '../../../services/api';

function* addToBooking({ id }) {
  const tripExists = yield select(
    state => state.booking.find(trip => trip.id === id),
  );

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('XD');
    return;
  }

  if (tripExists) {

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
