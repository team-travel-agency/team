// src/components/Trips.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(
    () => async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrips");
        setTrips(response.data);
      } catch (error) {
        console.log("Error fetching trips:", error);
      }
    },

    []
  );

  return (
    <div>
      <h1>Available Trips</h1>
      <ul>
        {trips.map((trip) => (
          <Link to={`/trip/${trip._id}`} key={trip._id}>
            <div>
              <p>Country: {trip.country}</p>
              <img src={trip.img} alt="image" />
              <p>Price: ${trip.price}</p>
              <p>Date: {trip.trip_date}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Trips;