import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import './style.css';

export default function Reservas() {
  const bookings = useSelector(state => state.booking);

  return (
    <div>
      <h1 className="title">You have requested {bookings.length} bookings</h1>

      {bookings.map(booking => (
        <div key={booking.id} className="bookings">
          <img src={booking.image} alt={booking.title} />
          <strong>{booking.title}</strong>
          <span>Quantidade: 2</span>
          <button type="button" onClick={() => {}}>
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