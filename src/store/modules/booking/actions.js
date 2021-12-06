
export function addBookingRequest(id) {
  return {
    type: 'ADD_BOOKING_REQUEST',
    id,
  };
}

export function addBookingSuccess(trip) {
  return {
    type: 'ADD_BOOKING_SUCCESS',
    trip,
  };
}

export function deleteBooking(id) {
  return {
    type: 'DELETE_BOOKING',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: 'UPDATE_BOOKING_REQUEST',
    id,
    amount,
  }
}

export function updateAmountSuccess(id, amount) {
  return {
    type: 'UPDATE_BOOKING_SUCCESS',
    id,
    amount,
  }
}
