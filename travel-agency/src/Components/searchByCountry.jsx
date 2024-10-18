// src/components/Search.js
import React, { useState } from "react";
import axios from "axios";


const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [trips, setTrips] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/getcountry?country=${searchInput}`);
      console.log(response.data);
      
      setTrips(response.data);
    } catch (error) {
      console.log("Error fetching trips:", error);
    }
  };

  return (
    <div class="fixed inset-0 flex items-center justify-center">
      <nav className="w-full bg-white shadow-md fixed top-0 z-10">
        <ul className="flex justify-around p-4">
          <li>
            <input
              type="text"
              placeholder="Search by country"
              value={searchInput}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded-md">Search</button>
          </li>
        </ul>
      </nav>
      {trips.map((trip)=>{
          return <div className="p-4 flex flex-wrap gap-4 justify-center">
           <p className="text-2xl font-bold text-gray-900 mb-2">
             Country: {trip.country}
           </p>
           <img
             src={trip.img}
             alt="image"
             className="h-48 w-full object-cover object-center rounded-md mb-2"
           />
           <p className="text-base font-semibold text-gray-900 mb-1">
             Price: dt {trip.price}
           </p>
           <p className="text-sm text-gray-700">Date: {trip.trip_date}</p>
           <p className="text-lg leading-relaxed text-gray-700 mb-8 max-w-lg">
              {trip.description}
            </p>
         </div>

      })}
      
    </div>
  );
};

export default Search;
