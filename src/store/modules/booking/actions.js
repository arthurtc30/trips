
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
