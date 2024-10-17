// src/components/Trips.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getTrips");
        setTrips(response.data);
      } catch (error) {
        console.log("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <nav className="w-full bg-white shadow-md">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/trips" className="text-blue-500 hover:text-blue-700 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/Pannier" className="text-blue-500 hover:text-blue-700 transition duration-300">Pannier</Link>
          </li>
          <li>
            <Link to="/search" className="text-blue-500 hover:text-blue-700 transition duration-300">Search</Link>
          </li>
          <li>
            <Link to="/User" className="text-blue-500 hover:text-blue-700 transition duration-300">User</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 flex flex-wrap gap-4 justify-center">
        {trips.map((trip) => (
          <Link to={`/trip/${trip._id}`} key={trip._id} className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Country: {trip.country}
              </p>
              <img
                src={trip.img}
                alt="image"
                className="h-48 w-full object-cover object-center rounded-md mb-2"
              />
              <p className="text-base font-semibold text-gray-900 mb-1">
                Price: ${trip.price}
              </p>
              <p className="text-sm text-gray-700">Date: {trip.trip_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trips;
