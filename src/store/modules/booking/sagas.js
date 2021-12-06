import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookingSuccess, updateAmountSuccess } from './actions';
import api from '../../../services/api';

function* addToBooking({ id }) {
  const tripExists = yield select(
    state => state.booking.find(trip => trip.id === id),
  );

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;

  if (amount > stockAmount) return;

  if (tripExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    }

    yield put(addBookingSuccess(data));
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  
  if (amount > stockAmount) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('ADD_BOOKING_REQUEST', addToBooking),
  takeLatest('UPDATE_BOOKING_REQUEST', updateAmount),
]);
