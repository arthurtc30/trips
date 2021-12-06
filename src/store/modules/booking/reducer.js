export default function booking(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOKING':
      return [...state, action.trip];
    default:
      return state;
  }
}