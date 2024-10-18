import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneTrip = ({ addToPannier, setSelectedTrip }) => {
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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
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
    <div class="fixed inset-0 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
          <ul className="flex justify-around p-4 bg-gray-50">
            <li>
              <Link to="/trips" className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/Pannier" className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300">reservation</Link>
            </li>
            <li>
              <Link to="/User" className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300">User</Link>
            </li>
          </ul>
        </nav>

       
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-100 ">
         

        
          <img src={trip.img} alt="Trip" className="w-full max-w-lg rounded-lg mb-6 object-cover" />

          
          <div className="text-center">
            <p className="text-2xl font-bold mb-4 text-blue-600">Country: {trip.country}</p>

           
            <p className="text-3xl font-extrabold mb-4 text-green-500">Price: dt {trip.price}</p>

           
            <p className="text-lg mb-4 font-medium text-gray-600">Date: {trip.trip_date}</p>

            
            <p className="text-lg leading-relaxed text-gray-700 mb-8 max-w-lg">
              {trip.description}
            </p>

         
            <Link to="/Pannier">
              <button
                onClick={() => addToPannier(trip)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              >
                Reserve
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTrip;