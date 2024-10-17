import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Trips from './Components/trips.jsx';
import OneTrip from './Components/onetrip.jsx';
import Pannier from './Components/pannier.jsx';

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
   
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Trips />} />
          <Route path="/trip/:id" element={<OneTrip setSelectedTrip={setSelectedTrip} />} />
          <Route path="/Pannier" element={<Pannier selectedTrip={selectedTrip} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
