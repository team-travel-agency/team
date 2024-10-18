// src/App.js
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Trips from "./Components/trips";
import OneTrip from "./Components/onetrip";
import Pannier from "./Components/Pannier";
import Login from "./Components/login";
import Signup from "./Components/signUp";
import Search from "./Components/searchByCountry";
import User from"./Components/userProfile"

function App() {
  const [reservedTrips, setReservedTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const addToPannier = (trip) => {
    setReservedTrips([...reservedTrips, trip]);
  };

  const removeFromPannier = (id) => {
    setReservedTrips((prevTrips) =>
      prevTrips.filter((trip) => trip._id !== id)
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/search" element={<Search />} />
          <Route path="/User" element={<User />} />
          <Route
            path="/trip/:id"
            element={
              <OneTrip
                addToPannier={addToPannier}
                setSelectedTrip={setSelectedTrip}
              />
            }
          />
          <Route
            path="/Pannier"
            element={
              <Pannier
                reservedTrips={reservedTrips}
                removeFromPannier={removeFromPannier}
                selectedTrip={selectedTrip}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
