import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
 return (
   <div className="container">
     <Link to="/">
        <img className="logo" src={logo} alt="Trips project logo" />
      </Link>

      <Link to="/bookings" className="booking">
        <div>
          <strong>My bookings</strong>
          <span>0 bookings</span>
        </div>
      </Link>
   </div>
 );
}