import React from 'react';
import { MdDelete } from 'react-icons/md';
import './style.css';

export default function Reservas() {
  return (
    <div>
      <h1 className="title">You have requested (1) bookings</h1>

      <div className="reservas">
        <img src="" alt="" />
        <strong>Trip</strong>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919"/>
        </button>
      </div>

      <footer>
        <button type="button">Request bookings</button>
      </footer>
    </div>
  );
}