import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Login from "./Components/login.jsx"
import Signup from "./Components/signUp.jsx"



function App() {
 return (
  <div>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
    </Routes>
  </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path='' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>

  </div>
 )


}

export default App
