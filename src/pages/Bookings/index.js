import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './style.css';
import { deleteBooking } from '../../store/modules/booking/actions';

export default function Reservas() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking);

  function handleDelete(id) {
    dispatch(deleteBooking(id));
  }

  return (
    <div>
      <h1 className="title">You have requested {bookings.length} bookings</h1>

      {bookings.map(booking => (
        <div key={booking.id} className="bookings">
          <img src={booking.image} alt={booking.title} />
          <strong>{booking.title}</strong>
          <span>Quantidade: {booking.amount}</span>
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