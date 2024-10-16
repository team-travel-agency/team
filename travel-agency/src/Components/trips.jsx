// src/components/Trips.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trips = () => {
  const [trips, setTrips] = useState([]);
console.log(trips);

  useEffect(() => {
    const fetchTrips = async () => {
      try {        
        const re = await axios.get('http://localhost:5000/api/getTrips');
        console.log('me',re);
        
        setTrips(re.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Available Trips</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip._id}>
            <h2>{trip.destination}</h2>
            <p>{trip.description}</p>
            <img src={trip.img}></img>
            <p>Price: ${trip.price}</p>
            <p>Duration: {trip.duration} days</p>
            <p>Date: {trip.trip_date}</p>
            <p>Country: {trip.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;
