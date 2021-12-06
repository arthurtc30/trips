import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
  const bookingSize = useSelector(state => state.booking.length);

  return (
    <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Trips project logo" />
      </Link>

      <Link to="/bookings" className="booking">
        <div>
          <strong>My bookings</strong>
          <span>{bookingSize} bookings</span>
        </div>
      </Link>
    </div>
  );
}