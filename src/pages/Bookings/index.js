import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md';
import './style.css';
import { deleteBooking, updateAmountRequest } from '../../store/modules/booking/actions';

export default function Reservas() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking);

  function handleDelete(id) {
    dispatch(deleteBooking(id));
  }

  function decrementAmount(booking) {
    dispatch(updateAmountRequest(booking.id, booking.amount - 1));
  }

  function incrementAmount(booking) {
    dispatch(updateAmountRequest(booking.id, booking.amount + 1));
  }

  return (
    <div>
      <h1 className="title">You have requested {bookings.length} bookings</h1>

      {bookings.map(booking => (
        <div key={booking.id} className="bookings">
          <img src={booking.image} alt={booking.title} />
          <strong>{booking.title}</strong>

          <div id="amount">
            <button type="button" onClick={() => decrementAmount(booking)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>

            <input type="text" readOnly value={booking.amount} />

            <button type="button" onClick={() => incrementAmount(booking)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button type="button" onClick={() => handleDelete(booking.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Request bookings</button>
      </footer>
    </div>
  );
}