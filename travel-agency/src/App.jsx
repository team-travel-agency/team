import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from "./Components/login"
import Signup from "./Components/signUp"
import Trips from './Components/trips.jsx';
import OneTrip from './Components/onetrip.jsx';
import Pannier from './Components/pannier.jsx';
import React  from "react"



function App() {

  
 return (
  <div>
 <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/firstPage' element={<Trips/>}/>


    </Routes>
    </BrowserRouter>
  <BrowserRouter>
    <Routes>
      <Route path="/trip/:id" element={<OneTrip />} />
      <Route path="/Pannier" element={<Pannier/>} />
    </Routes>
  </BrowserRouter>

  </div>
 )


}

export default App
