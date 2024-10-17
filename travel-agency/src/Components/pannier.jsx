import { Link } from "react-router-dom";
import React from 'react';

const Pannier = ({ reservedTrips, removeFromPannier, selectedTrip }) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
          <nav className="w-full bg-white shadow-md">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/trips" className="text-blue-500 hover:text-blue-700 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/Pannier" className="text-blue-500 hover:text-blue-700 transition duration-300">Pannier</Link>
          </li>
          <li>
            <Link to="/User" className="text-blue-500 hover:text-blue-700 transition duration-300">User</Link>
          </li>
         
        </ul>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Your Reserved Trips</h1>
      <p className="mb-4">Welcome to your pannier. Your reservation is for only one person. You can add as many reservations as you want.</p>
      
      {reservedTrips.length > 0 ? (
        reservedTrips.map((trip) => (
          <div key={trip._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="text-xl font-bold mb-2">Country: {trip.country}</p>
            <img src={trip.img} alt="Trip" className="w-full h-48 object-cover rounded-md mb-2" />
            <p className="mb-1">Destination: {trip.destination}</p>
            <p className="mb-1">Price: ${trip.price}</p>
            <p className="mb-1">Date: {trip.trip_date}</p>
            <p className="mb-2">Description: {trip.description}</p>
            <button
              onClick={() => removeFromPannier(trip._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No trips reserved.</p>
      )}

      {selectedTrip && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-bold mb-2">Reserved Trip</h2>
          <p className="text-xl mb-2">Country: {selectedTrip.country}</p>
          <img src={selectedTrip.img} alt="Trip" className="w-full h-48 object-cover rounded-md mb-2" />
          <p className="mb-1">Price: ${selectedTrip.price}</p>
          <p className="mb-1">Date: {selectedTrip.trip_date}</p>
          <p className="mb-2">Description: {selectedTrip.description}</p>
        </div>
      )}
    </div>
  );
};

export default Pannier;
