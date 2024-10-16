import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from "./Components/login.jsx"
import Signup from "./Components/signUp.jsx"
import Trips from "./Components/trips.jsx"

import { useState } from 'react';



function App() {
  const [userExist , setUserExist] = useState(true)
  const [logged , setLogged] = useState(true)

  const IsExist =()=>{
    if (userExist) {
     return  <Login/>
    }else {
     return <Signup/>
    }
  }

 return (
  <div>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<IsExist/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/firstPage' element={<Trips/>}/>


    </Routes>
    </BrowserRouter>

  </div>
 )


}

export default App
