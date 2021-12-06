import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/trips');

      console.log(response.data);
      setTrips(response.data);
    }

    loadApi();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}