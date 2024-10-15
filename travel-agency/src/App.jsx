import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from "./Components/login"
import Signup from "./Components/signUp"



function App() {
 return (
  <div>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>

  </div>
 )


}

export default App
