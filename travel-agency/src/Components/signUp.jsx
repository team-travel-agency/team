import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      userName,
      email,
      password,
      
    };

    try {
      const response = await axios.post("/api/signup", userData);
      console.log("Response:", response.data);
     
    } catch (error) {
      console.error("Error during sign up:", error);
      
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => { setUserName(e.target.value); }}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />
       
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
