import React, { useState } from "react";
import axios from "axios";
// import Link from 'react-router-dom'
const Signup = () => {
  console.log();
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userData = {
      username:userName,
      email:email,
      password:password
    };

    try {
        console.log(userData);
        console.log("hh");
        
      const response = await axios.post ("http://localhost:5000/api/signup" , userData);
      
      console.log("Response:", response);
     
    } catch (error) {
      console.error("Error during sign up:", error);
      
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
     
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
       
        <button type="submit" onClick={()=>handleSignUp()}>Sign Up</button>
        {/* <Link to="/firstPage">Login</Link> */}
    </div>
  );
};

export default Signup;