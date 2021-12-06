import produce from 'immer';

export default function booking(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOKING_SUCCESS':
      return produce(state, draft => {
        draft.push(action.trip);
      });
    case 'DELETE_BOOKING':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1);
        }
      });
    case 'UPDATE_BOOKING_SUCCESS': {
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) {
          draft[tripIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}