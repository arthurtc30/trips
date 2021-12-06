import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';
import { addBooking } from '../../store/modules/booking/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/trips');

      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(trip) {
    dispatch(addBooking(trip));
  }

  if (trips.length === 0) {
    return (
      <div style={{ color: "#FFF" }}>
        No trips found...
      </div>
    );
  }

  return (
    <div>
      <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Available' : 'Not available'}</span>

            <button type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              Request booking
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}