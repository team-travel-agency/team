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
      setTrips(response.data);
    } catch (error) {
      console.log("Error fetching trips:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <nav className="w-full bg-white shadow-md">
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
      
    </div>
  );
};

export default Search;
