import Login from "./Components/login"
import Signup from "./Components/signUp"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Trips from './Components/trips.jsx';
import OneTrip from './Components/onetrip.jsx';
import Pannier from './Components/pannier.jsx';
import React  from "react"

function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
   
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route path='' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/firstPage' element={<Trips/>}/>
          <Route path='' element={<Trips />} />
          <Route path="/trip/:id" element={<OneTrip setSelectedTrip={setSelectedTrip} />} />
          <Route path="/Pannier" element={<Pannier selectedTrip={selectedTrip} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
