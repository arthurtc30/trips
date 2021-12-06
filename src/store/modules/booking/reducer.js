export default function booking(state = [], action) {
  console.log(state)

  switch (action.type) {
    case 'ADD_BOOKING':
      return [...state, action.trip];
    default:
      return state;
  }
}