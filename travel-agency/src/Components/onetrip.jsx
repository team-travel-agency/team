// src/components/OneTrip.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneTrip = ({ setSelectedTrip }) => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getTrip/${id}`);
        setTrip(response.data);
      } catch (error) {
        console.log("Error fetching trip:", error);
      }
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  const handleReserve = async () => {
    setSelectedTrip(trip);
    try {
      await axios.post('http://localhost:5000/api/saveTrip', trip);
      console.log("Trip saved successfully");
    } catch (error) {
      console.log("Error saving trip:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Trip Details</h1>
      <p className="text-xl mb-2">Country: {trip.country}</p>
      <img src={trip.img} alt="Trip" className="w-full max-w-md rounded-lg mb-4" />
      <p className="text-lg font-semibold mb-2">Price: ${trip.price}</p>
      <p className="text-lg mb-2">Date: {trip.trip_date}</p>
      <p className="text-base mb-4">Description: {trip.description}</p>
      <Link to="/Pannier">
        <button
          onClick={handleReserve}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Reserve
        </button>
      </Link>
    </div>
  );
};

export default OneTrip;
