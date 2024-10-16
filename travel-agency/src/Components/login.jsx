import React , {useState} from "react"
import axios from "axios"
const Login=()=>{
    const [userName , setUserName]= useState("")
    const [email , setEmail]= useState("")
    const [password , setPassword]= useState("")
    
const handleLogin = async (e)=>{
try {
console.log("waaaw");

    
  const response = await axios.post ("http://localhost:5173/api/login"); 
  
  console.log("Response:", response);
 
} catch (error) {
  console.error("Error during sign up:", error);
  
}

}

return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
    <input 
    type="text"
    placeholder="enter your name"
    value={userName}
    onChange={(e)=>{setUserName(e.target.value)}}
    />
<input 
    type="text"
    placeholder="enter your email"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    />
 
 <input 
    type="text"
    placeholder="enter your password"
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    />
<button type="submit"> Login </button>
    </form>
    </div>
)
}
export default Login 