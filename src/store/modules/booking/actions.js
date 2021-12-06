
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

export function updateBookingAmount(id, amount) {
  return {
    type: 'UPDATE_BOOKING',
    id,
    amount,
  }
}
