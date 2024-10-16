import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import Trips from "./trips.jsx"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(true);

  const handleLogin = async () => {
    const userData = {
      email: email,
      password: password,
    };



    try {
      const response = await axios.post(
        "http://localhost:5173/api/login",
        userData
      );

      console.log("Response:", response);
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };


  const checkLogin = () => {
    if (response.data.success) {
      return <Link to="firstPage"></Link>;
    }
    alert("try again!");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={checkLogin}>Login</button>
        <p>Don't have an account?</p>

        <Link to="/signup">
          <p> Create new account </p>
        </Link>
      </form>
    </div>
  );
};
export default Login;
