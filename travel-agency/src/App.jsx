import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Trips from './Components/trips.jsx';
import OneTrip from './Components/onetrip.jsx';
import Pannier from './Components/pannier.jsx';
import NavBar from './NavBar.jsx'; //
import { useState } from 'react';

function App() {
  const [reservedTrips, setReservedTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToPannier = (trip) => {
    setReservedTrips([...reservedTrips, trip]);
  };

  const removeFromPannier = (id) => {
    setReservedTrips((prevTrips) => prevTrips.filter((trip) => trip._id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <BrowserRouter>
        {/* Include the NavBar component here */}
        <NavBar />

        <Routes>
          <Route
            path=''
            element={
              <>
                <Trips searchTerm={searchTerm} />
              </>
            }
          />
          <Route path='/trip/:id' element={<OneTrip addToPannier={addToPannier} />} />
          <Route path='/Pannier' element={<Pannier reservedTrips={reservedTrips} removeFromPannier={removeFromPannier} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
