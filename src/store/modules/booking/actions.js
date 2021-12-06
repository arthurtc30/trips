
export function addBooking(trip) {
  return {
    type: 'ADD_BOOKING',
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
